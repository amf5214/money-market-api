import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

// Language validation rule declaration to check if the country field is valid 
@ValidatorConstraint({ name: 'ValidLanguage', async: true })
@Injectable()
export class ValidLanguageRule implements ValidatorConstraintInterface {
  constructor() {}

  // Validation function to check language value
  async validate(value: string) {
    try {
      let validValues = ['ar','bg','bn','cs','da','de','el','en','es',
        'et','fa','fi','fr','he','hi','hr','hu','id','it','ja','ko',
        'lt','multi','nl','no','pl','pt','ro','ru','sk','sv','ta','th',
        'tr','uk','vi','zh',];
      return validValues.includes(value);
    } catch (e) {
      return false;
    }
  }

  // Function to return error message upon invalid value being passed
  defaultMessage(args: ValidationArguments) {
    return `Language option not valid`;
  }
}