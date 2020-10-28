import { Field, ID, ObjectType } from "@nestjs/graphql";
import { AuthLog } from "src/authlogparser/entity/authLog.entity";

@ObjectType("AuthLog")
export class AuthLogType 
{
    @Field(type => ID)
    id: number;

    @Field()
    timeStamp: string;

    @Field()
    logDetail: string;
    
}