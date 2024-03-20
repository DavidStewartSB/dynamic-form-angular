import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IForm, IFormControl, IValidator } from '../interface/form.interface';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule,MatInputModule,MatIconModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatRadioModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  @Input() form!: IForm;
  fb = inject(FormBuilder)
  dynamicFormGroup: any  = this.fb.group({}, {updateOn: 'submit'})
  hide = true;

  ngOnInit(): void {
    if (this.form?.formControls) {
      const formGroup: any = {};
      this.form.formControls.forEach((control: IFormControl) => {
        const controlValidators: any = [];
        if (control.validators) {
          control.validators.forEach((val: IValidator) => {
            if (val.validatorName === 'required') controlValidators.push(Validators.required);
            if (val.validatorName === 'email') controlValidators.push(Validators.email);
            if (val.validatorName === 'minlength') controlValidators.push(Validators.minLength(val.minLength as number));
            if (val.validatorName === 'pattern') controlValidators.push(Validators.pattern(val.pattern as string));
            if (val.validatorName === 'maxlength') controlValidators.push(Validators.maxLength(val.maxLength as number));
          });
        }
        formGroup[control.name!] = [control.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }


  onSubmit() {
    if (this.dynamicFormGroup.valid) {
      console.log('Form values:', this.dynamicFormGroup.value);
    }
  }
  resetForm() {
    this.dynamicFormGroup.reset();
  }
  getValidationErrors(control: IFormControl): string {
    const customFormControl = this.dynamicFormGroup.get(control.name)
    let errorMessage: string = ''
    control.validators?.forEach((val) => {
      if(customFormControl?.hasError(val.validatorName as string)) {
        errorMessage = val.message as string
      }
    })
    return errorMessage
  }

}
