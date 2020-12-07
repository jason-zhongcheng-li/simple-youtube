import { Field, InputType } from 'type-graphql';

@InputType()
export class VideoInput {

  @Field(() => String)
  public filename: string;

  @Field(() => Number)
  public timestamp: number;

  @Field(() => Number)
  public size: number;

  @Field(() => String)
  public path: string;
}