import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';


@ValidatorConstraint({ name: 'ValidLanguage', async: true })
@Injectable()
export class ValidLanguageRule implements ValidatorConstraintInterface {
  constructor() {}

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
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Language option not valid`;
  }
}