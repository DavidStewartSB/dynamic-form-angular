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
      "class": "",
      "type": "email",
      "validators": [
        {
          "validatorName": "pattern",
          "pattern": "",
          "message": "First name should be 8-15 characters in uppercase"
        },
        {
          "validatorName": "required",
          "required": true,
          "message": "First Name is Required"
        },
      ]
    },
    {
      "name": "password",
      "label": "Password",
      "value": "",
      "placeholder": "Digite sua senha",
      "class": "col-md-6",
      "type": "password",
      "validators": [
        {
          "validatorName": "pattern",
          "pattern": "",
          "message": "Password should be 8-15 characters in uppercase"
        },
        {
          "validatorName": "required",
          "required": true,
          "message": "Password is Required"
        },
      ]
    },
    {
      "name": "cars",
      "label": "Cars",
      "options": [
        {
          "id": 1,
          "value": "Fusca"
        },
        {
          "id": 2,
          "value": "Charrete"
        },
        {
          "id": 3,
          "value": "Caminhão"
        }
      ],
      "placeholder": "",
      "class": "",
      "type": "select",
      "validators": [
        {
          "validatorName": "required",
          "required": true,
          "message": "Cars is required"
        },
      ]
    },
    {
      "name": "gender",
      "label": "Gender",
      "class": "",
      "radioOptions": [
        "Male",
        "Female"
      ],
      "type": "radio",
      "validators": [
        {
          "validatorName": "required",
          "required": true,
          "message": "Radios is required"
        },
      ]
    },

  ]
}