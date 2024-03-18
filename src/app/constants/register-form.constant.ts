import { IForm } from "../interface/form.interface";


export const registerFormConfig: IForm = {
  formTitle: 'Gym Registration Form',
  saveBtnTitle: 'Confirm Registration',
  resetBtnTitle: 'Reset',
  formControls: [
    {
      "name": "firstName",
      "label": "First name",
      "value": "",
      "placeholder": "",
      "class": "col-md-6",
      "type": "text",
      "validators": [
        {
          "validatorName": "pattern",
          "pattern": "^[A-Z]{8,15}$",
          "message": "First name should be 8-15 characters in uppercase"
        },
        {
          "validatorName": "required",
          "message": "First Name is Required"
        },
      ]
    }
  ]
}