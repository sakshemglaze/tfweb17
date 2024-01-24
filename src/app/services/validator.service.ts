import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordRegex: RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
  constructor() { }

  getFormControlError(formControl: any, fieldName?: any, fieldType?: any) {
    for (let error of Object.keys(formControl.errors)) {
      if (error == 'maxlength') {
        return 'Please enter less than ' + formControl.errors.maxlength.requiredLength + ' characters in the form';
      } else if (error == 'required') {
        return fieldName + ' is required'
      } else if (error == 'pattern' && fieldType == 'email') {
        return 'Please enter a valid email address'
      } else if (error == 'pattern' && fieldType == 'password') {
        return 'Your password must contain a digit, a lowercase letter, an uppercase letter, an special character and a minimun total length of 8.'
      } else {
        return '';
      }


    }
    return
  }
}
