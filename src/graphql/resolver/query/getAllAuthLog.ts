import { Injectable } from "@nestjs/common";
import { Query } from "@nestjs/graphql";
import { AuthLog } from "src/authlogparser/entity/authLog.entity";
import { AuthLogService } from "src/authlogparser/service/authlog.service";
import { AuthLogType } from "src/graphql/type/authlog";

@Injectable()
export class GetAllAuthLogResolver
{
    private authLogService: AuthLogService;

    public constructor(authLogService: AuthLogService)
    {
        this.authLogService = authLogService;
    }

    @Query(returns => [AuthLogType])
    getAllAuthLog(): Promise<AuthLog[]>
    {
        return this.authLogService.getAllAuthLog();
    }
}