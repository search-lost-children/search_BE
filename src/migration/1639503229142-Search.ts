import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from "typeorm";

const tableName = "search"

export class Search1639503229142 implements MigrationInterface {

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
        await queryRunner.dropTable(tableName);
    }
}
