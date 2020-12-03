import { Field, InputType } from 'type-graphql';

@InputType()
export class VideoInput {

  @Field(() => String)
  public path: string;
}