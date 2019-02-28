import {AbstractControl, ValidatorFn} from '@angular/forms';

export function matchPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const password = control.get('password').value;
      const repeatPassword = control.get('repeatPassword').value;
      if (password === repeatPassword) {
        return null;
      } else {
        return {MissMatchPassword: true};
      }
  };
}
