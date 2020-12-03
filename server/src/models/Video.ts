import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Video {

  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  duration: number;
}