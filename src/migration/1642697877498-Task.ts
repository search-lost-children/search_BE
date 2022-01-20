import {MigrationInterface, QueryRunner, Table,TableIndex, TableColumn, TableForeignKey } from "typeorm";

const tableName = "task"

export class Task1642697877498 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: tableName,
            columns: [
                {
                    name: "number",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "taskType",
                    type: "varchar",
                },
                {
                    name: "locationType",
                    type: "varchar",
                },
                {
                    name: "location",
                    type: "varchar",
                },
                {
                    name: "executorId",
                    type: "varchar",
                },
                {
                    name: "searchId",
                    type: "int"
                }

            ]
        }))

        await queryRunner.createForeignKey(tableName, new TableForeignKey({
            columnNames: ['searchId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'search',
            onDelete: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable(tableName);
        if (table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('searchId') !== -1);
            if (foreignKey) {
                await queryRunner.dropForeignKey(tableName, foreignKey);
            }

            await queryRunner.dropTable(tableName);
        }
    }
}





