import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AuthLog } from "../entity/authLog.entity";
import * as fs from "fs";

import { CreateAuthLogInterface } from "../interface/authlog";

@Injectable()
export class AuthLogService {
    private readonly authLogRepository: Repository<AuthLog>;

    public constructor(@InjectRepository(AuthLog) authLogRepository: Repository<AuthLog>){
        this.authLogRepository = authLogRepository;
    }

    public async create(data: CreateAuthLogInterface): Promise<AuthLog>
    {
        const authlog = await new AuthLog();

        authlog.logDetail = data.logDetail;
        authlog.timeStamp = data.timeStamp;

        return await this.authLogRepository.save(authlog);
    }

    public async getAuthLog(): Promise<string>
    {
        const timeStampArray = [];
        const logDetailArray = [];

        const readAuthLogFile = await fs.readFileSync("/var/log/auth.log");
        const logString: string = readAuthLogFile.toString();
        
        let lines = logString.split(/\r\n|\n/);

        lines = lines.splice(lines.length / 2,lines.length)

        lines.forEach((log,index) => {
            const timeStamp = log.slice(0,15);

            const logDetail = log.slice(15);

            if(logDetail.includes("Failed password for"))
            {
                timeStampArray.push(timeStamp);
                logDetailArray.push(logDetail);
            }

        });
        let authLog = await new AuthLog();

        for(let i = 0; i < timeStampArray.length; i++)
        {
            authLog.logDetail = logDetailArray[i];
            authLog.timeStamp = timeStampArray[i];
            await this.authLogRepository.save(authLog);
        }
        return "Loglar veritabanına kaydedildi";
    }

    public async getAllAuthLog():Promise<AuthLog[]>
    {
        return await this.authLogRepository.find({
            order: {
                id: "DESC"
            }
        });
    }

}