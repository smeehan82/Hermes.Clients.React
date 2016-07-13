import * as Mobx from 'mobx';

export type ValidationResult = boolean | string | { passed: boolean, errorText?: string };

export interface IField<TValue> {
    name: string;
    label: string;
    value: TValue;
    initialValue: TValue;

    //@TODO: handle async validation
    setValidation: (validateFunction: () => ValidationResult) => void;
    isValid: boolean;
    helpText?: string;
    error: string;
    runValidation: () => void;
    setValue: (value: TValue) => void;
    touched: boolean;
    reset: () => void;
}

export abstract class Field<TValue> implements IField<TValue> {
    constructor(
        name: string,
        label: string,
        initialValue: TValue = null,
        validateFunction: () => ValidationResult = () => true) {
        Mobx.runInAction('fieldConstructor', () => {
            this._name = name;
            this._label = label;
            this._initialValue = initialValue;
            this.setValidation(validateFunction);

            this._value = initialValue;
            this._isValid = false;
            this._error = '';
            this._touched = false;
        });
    }

    @Mobx.observable private _name: string;
    @Mobx.observable private _label: string;
    @Mobx.observable private _initialValue: TValue;
    @Mobx.observable private _value: TValue;
    @Mobx.observable private _validate: () => ValidationResult;
    @Mobx.observable private _isValid: boolean;
    @Mobx.observable private _error: string;
    @Mobx.observable private _touched: boolean;

    @Mobx.computed get name(): string { return this._name; }
    @Mobx.computed get label(): string { return this._label; }
    @Mobx.computed get value(): TValue { return this._value; }
    @Mobx.computed get initialValue(): TValue { return this._initialValue; }
    @Mobx.computed get isValid(): boolean { return this._isValid }
    @Mobx.computed get error(): string { return this._error; }
    @Mobx.computed get touched(): boolean { return this._touched; }

    @Mobx.action
    setValidation(validateFunction: () => ValidationResult): void {
        this._validate = validateFunction;
    }

    @Mobx.action
    runValidation(): void {
        const result = this._validate();
        this._touched = true;
        if (typeof result === 'boolean') {
            this._isValid = result;
            this._error = '';
        }
        else if (typeof result === 'string') {
            this._isValid = false;
            this._error = result;
        }
        else {
            this._isValid = result.passed;
            this._error = result.errorText ? result.errorText : '';
        }
    }

    @Mobx.action
    setValue(value: TValue, touch: boolean = false): void {
        this._value = value;
        if (touch && !this._touched) {
            this._touched = true;
        }
    }

    @Mobx.action
    reset(): void {
        this.setValue(this._initialValue);
        this._touched = false;
        this._error = '';
        this._isValid = false;
    }
}