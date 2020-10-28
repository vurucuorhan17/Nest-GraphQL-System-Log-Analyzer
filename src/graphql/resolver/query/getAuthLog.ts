import { Injectable } from "@nestjs/common";
import { Query } from "@nestjs/graphql";
import { AuthLog } from "src/authlogparser/entity/authLog.entity";
import { AuthLogService } from "src/authlogparser/service/authlog.service";
import { AuthLogType } from "src/graphql/type/authlog";

@Injectable()
export class GetAuthLogResolver
{

    private readonly authLogService: AuthLogService;

    public constructor(authLogService: AuthLogService)
    {
        this.authLogService = authLogService;
    }

    @Query(returns => String)
    getAuthLog(): Promise<string>
    {
        return this.authLogService.getAuthLog();
    }
}