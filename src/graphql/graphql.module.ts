import { Module } from '@nestjs/common';
import { AuthlogparserModule } from 'src/authlogparser/authlogparser.module';
import { CreateAuthLogResolver } from './resolver/mutation/createAuthLog';
import { GetAllAuthLogResolver } from './resolver/query/getAllAuthLog';
import { GetAuthLogResolver } from './resolver/query/getAuthLog';

@Module({
    imports: [AuthlogparserModule],
    providers: [
        CreateAuthLogResolver,
        GetAuthLogResolver,
        GetAllAuthLogResolver,
    ]
})
export class GraphqlModule {}
