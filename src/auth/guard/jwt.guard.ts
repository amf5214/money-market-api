import { AuthGuard } from '@nestjs/passport';

// Implementation of the AuthGuard that specifically uses the jwt passport functionality
// AuthGuard can be used with 'jwt' as a parameter but this wraps it to streamline usage
export class JwtGuard extends AuthGuard('jwt') {}