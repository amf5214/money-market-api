
import { SetMetadata } from '@nestjs/common';

import { AppAbility } from '../casl-ability.factory';

// Definition of a function based policy handler
interface IPolicyHandler {
  handle(ability: AppAbility): boolean;
}

// Definition of a callback policy handler 
type PolicyHandlerCallback = (ability: AppAbility) => boolean;

// Type to handle the possibility of a function based or callback based policy handler
export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;

// Constant for storing check policy string
export const CHECK_POLICIES_KEY = 'check_policy';

// Decorator declaration that takes in an array of policy handlers
// and applies them to the class that they are used with
export const CheckPolicies = (...handlers: PolicyHandler[]) =>
  SetMetadata(CHECK_POLICIES_KEY, handlers);