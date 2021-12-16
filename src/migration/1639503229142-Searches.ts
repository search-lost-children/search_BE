import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

export class Searches1639503229142 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Searches",
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
                    type: "TEXT",
                },
                {
                    name: "lastName",
                    type: "TEXT",
                }
            ]
        }), true)

        // await queryRunner.createIndex("question", new TableIndex({
        //     name: "IDX_QUESTION_NAME",
        //     columnNames: ["name"]
        // }));

    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Searches");
    }
}
