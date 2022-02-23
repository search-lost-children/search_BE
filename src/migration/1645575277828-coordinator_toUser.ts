import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class coordinatorToUser1645575277828 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('coordinator', new TableColumn({
            name: 'userId',
            type: 'integer'
        }))
        await queryRunner.dropColumns('coordinator', ['firstName', 'lastName'])

        await queryRunner.createForeignKey('coordinator', new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: 'user',
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
