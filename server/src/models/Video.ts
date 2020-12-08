import { Field, ID, ObjectType } from 'type-graphql';


// This is also entity class in the project
@ObjectType()
export class Video {

  @Field(() => ID)
  public id?: number;

  @Field(() => String)
  public name: string;

  @Field(() => String)
  public lastModified: string;

  @Field(() => String)
  public size: string;

  @Field(() => String)
  public fullPath: string;
}