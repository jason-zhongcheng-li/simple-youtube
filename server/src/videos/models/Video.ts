import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Video {

  @Field(() => ID)
  public id: number;

  @Field(() => String)
  public name: string;

  @Field(() => Number)
  public duration: number;
}