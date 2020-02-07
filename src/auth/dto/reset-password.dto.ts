import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class ResetPasswordDto {
  @Field()
  @IsNotEmpty()
  forgetPasswordToken: string;

  @Field()
  @IsNotEmpty()
  username: string;

  @Field()
  @IsNotEmpty()
  newPassword: string;
}
