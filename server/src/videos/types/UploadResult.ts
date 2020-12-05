import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class UploadResult {

  @Field(() => Boolean)
  public success: boolean;

  @Field(() => String)
  public message: string;

}