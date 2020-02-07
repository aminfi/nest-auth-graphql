import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class RefreshTokenDto {
  @Field()
  @IsNotEmpty()
  refreshToken: string;
}
