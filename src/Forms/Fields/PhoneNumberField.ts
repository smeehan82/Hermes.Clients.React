import {Field, IField, ValidationResult} from  './Field';

export class PhoneNumberField extends Field<string> {
    constructor(name: string, label: string, initialValue: string = null) {
        super(name, label, initialValue, PhoneNumberField.validatePhoneNumber);
    }

    static validatePhoneNumber(): ValidationResult {
        //@TODO actually validate phone number
        console.log('validating phone number');
        return true;
    }
}