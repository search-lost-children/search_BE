import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

export class Coordinators1639504404957 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Coordinators",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
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

        await queryRunner.createForeignKey("Coordinators", new TableForeignKey({
            columnNames: ["searchId"],
            referencedColumnNames: ["id"],
            referencedTableName: "Searches",
            onDelete: "CASCADE"
        }));

        // await queryRunner.createIndex("question", new TableIndex({
        //     name: "IDX_QUESTION_NAME",
        //     columnNames: ["name"]
        // }));

    }

    async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("Coordinators");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("searchId") !== -1);
        await queryRunner.dropTable("Coordinators");
        await queryRunner.dropForeignKey("Coordinators", foreignKey);
    }

}
