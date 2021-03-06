import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

const tableName = "coordinator"
const searchTableName = "search"

export class Coordinators1639504404957 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: tableName,
            columns: [
                new TableColumn({
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    isUnique: true,
                    generationStrategy: 'increment'
                }),
                {
                    name: "searchId",
                    type: "int",
                },
                {
                    name: "firstName",
                    type: "TEXT",
                },
                {
                    name: "lastName",
                    type: "TEXT",
                }
            ]
        }), true)

        await queryRunner.createForeignKey(tableName, new TableForeignKey({
            columnNames: ["searchId"],
            referencedColumnNames: ["id"],
            referencedTableName: searchTableName,
            onDelete: "CASCADE"
        }));
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable(tableName);
        if(table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("searchId") !== -1);
            if (foreignKey) {
                await queryRunner.dropTable(tableName);
                await queryRunner.dropForeignKey(tableName, foreignKey);
            }
        }
    }

}
