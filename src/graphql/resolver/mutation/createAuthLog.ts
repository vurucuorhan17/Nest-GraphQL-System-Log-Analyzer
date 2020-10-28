import { Injectable } from "@nestjs/common";
import { Args, Mutation } from "@nestjs/graphql";
import { AuthLog } from "src/authlogparser/entity/authLog.entity";
import { AuthLogService } from "src/authlogparser/service/authlog.service";
import { CreateAuthLog } from "src/graphql/input/authlog.input";
import { AuthLogType } from "src/graphql/type/authlog";

@Injectable()
export class CreateAuthLogResolver
{
    private readonly authLogService: AuthLogService;

    public constructor(authLogService: AuthLogService){
        this.authLogService = authLogService;
    }

    @Mutation(returns => AuthLogType)
    createAuthLog(@Args("createAuthLogInput") createAuthLogInput: CreateAuthLog): Promise<AuthLog>
    {
        return this.authLogService.create(createAuthLogInput);
    } 
}