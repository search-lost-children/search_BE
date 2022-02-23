import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class squadAddedToCoordinator1645582432475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('coordinator', new TableColumn({
            name: 'squadId',
            type: 'integer',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
