import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { GraphqlModule } from './graphql/graphql.module';
import { AuthlogparserModule } from './authlogparser/authlogparser.module';

import { typeOrmConfig } from './config/typeorm.config';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    GraphqlModule,
    AuthlogparserModule
  ],
  providers: [],
})
export class AppModule {}
