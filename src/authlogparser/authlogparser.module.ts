import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthLog } from './entity/authLog.entity';
import { AuthLogService } from './service/authlog.service';

@Module({
    imports: [TypeOrmModule.forFeature([AuthLog])],
    providers: [AuthLogService],
    exports: [AuthLogService]
})
export class AuthlogparserModule {}
