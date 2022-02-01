import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class createEvents1643732480820 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "event",
            columns: [
                new TableColumn({
                    name: "priority",
                    type: "number"
                }),
                new TableColumn({
                    name: "time",
                    type: "timestamp"
                }),
                new TableColumn({
                    name: "authorId",
                    type: "integer"
                }),
                new TableColumn({
                    name: "description",
                    type: "varchar"
                }),
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("event");
    }

}