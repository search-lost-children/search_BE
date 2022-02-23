import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class squadAddedSearch1645581008041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('squad', new TableColumn({
            name: 'searchId',
            type: 'integer'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
