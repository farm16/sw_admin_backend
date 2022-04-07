import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
import { JwtPayload } from 'src/api/auth/types/jwtPayload.type';
import { JwtPayloadWithRt } from 'src/api/auth/types/jwtPayloadWithRt.type';

export const Public = () => SetMetadata('isPublic', true);

export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): string => {
    const request = context.switchToHttp().getRequest();
    const user = request.user as JwtPayload;
    return user.sub;
  },
);

export const GetCurrentUser = createParamDecorator(
  (data: keyof JwtPayloadWithRt | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.user;
    return request.user[data];
  },
);

export const GetCurrentBusinessId = createParamDecorator(
  (_: undefined, context: ExecutionContext): string => {
    const request = context.switchToHttp().getRequest();
    const user = request.params;
    return user.sub;
  },
);
