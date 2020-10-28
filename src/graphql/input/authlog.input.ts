import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateAuthLog
{
    @IsNotEmpty()
    @Field()
    timeStamp: string;

    @IsNotEmpty()
    @Field()
    logDetail: string;
}