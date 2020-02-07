import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class ForgetPasswordDto {

  @Field()
  @IsNotEmpty()
  username: string;
}
