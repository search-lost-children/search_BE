import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

const tableName = "search"

export class Search1639503229142 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: tableName,
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "date",
                    type: "date",
                },
                {
                    name: "firstName",
                    type: "varchar",
                },
                {
                    name: "lastName",
                    type: "varchar",
                }
            ]
        }), true)

        // await queryRunner.createIndex("question", new TableIndex({
        //     name: "IDX_QUESTION_NAME",
        //     columnNames: ["name"]
        // }));

    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName);
    }
}
