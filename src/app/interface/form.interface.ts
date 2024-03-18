export interface IForm {
    formTitle?: string
    formControls?: IFormControl[]
    saveBtnTitle?: string
    resetBtnTitle?: string
}

export interface IFormControl {
    name?: string
    label?: string
    value?: string
    placeholder?: string
    options?: IOptions[]
    radioOptions?: string[]
    class?: string
    type?: string
    validators?: IValidator[]
}

export interface IValidator {
    validatorName?: string
    message?: string
    required?: boolean
    pattern?: string | undefined
    minLength?: number | undefined
    maxLength?: number | undefined
    email?: string
}

export interface IOptions {
    id?: number
    value?: string
}