import { AbstractControl, ValidationErrors } from '@angular/forms';

export function textValidator(control: AbstractControl): ValidationErrors | null {
  return control.value === '' ||
    /^[\p{L}\p{N}\s!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~—]+$/u.test(control.value)
    ? null
    : { invalidText: true };
}
