import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AuthLogTable1603888965342 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'authlog',
              columns: [
                {
                  name: 'id',
                  type: 'int4',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'timeStamp',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'logDetail',
                  type: 'varchar',
                  isNullable: false,
                },
              ],
            }),
            false,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.query(`DROP TABLE authlog`);
    }

}
