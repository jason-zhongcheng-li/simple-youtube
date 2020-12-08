import { VideoInput } from './../inputs/VideoInput';
import { Field, ID, ObjectType } from 'type-graphql';


// Custom type of Graphql
@ObjectType()
export class UploadResult {

  @Field(() => Boolean)
  public success: boolean;

  @Field(() => String)
  public message: string;
}