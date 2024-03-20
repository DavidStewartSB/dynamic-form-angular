import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule } from '@angular/forms';
import { registerFormConfig } from './constants/register-form.constant';
import { IForm } from './interface/form.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  registerForm = registerFormConfig as IForm
  title = 'dynamic';
}
