import { Injectable } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';


@ValidatorConstraint({ name: 'ValidCountry', async: true })
@Injectable()
export class ValidCountryRule implements ValidatorConstraintInterface {
  constructor() {}

  async validate(value: string) {
    try {
      let validValues = ['ar', 'au', 'be', 'br', 'ca', 'ch', 'cl', 'cn', 'cz', 'de', 
	'eg', 'es', 'eu', 'fr', 'gb', 'global', 'gr', 'hk', 'hu', 
	'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lk', 'mx', 'my', 
	'nl', 'no', 'nz', 'ph', 'pt', 'qa', 'ru', 'sa', 'tr', 'tw', 
	'us', 've', 'za'];
      return validValues.includes(value);
    } catch (e) {
      return false;
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Country option not valid`;
  }
}

