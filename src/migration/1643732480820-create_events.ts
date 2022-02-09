import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class createEvents1643732480820 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "event",
            columns: [
                new TableColumn({
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    isUnique: true,
                    generationStrategy: 'increment'
                }),
                new TableColumn({
                    name: "searchId",
                    type: "integer"
                }),
                new TableColumn({
                    name: "priority",
                    type: "integer"
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

        await queryRunner.createForeignKey('event', new TableForeignKey({
            columnNames: ["authorId"],
            referencedColumnNames: ["id"],
            referencedTableName: 'user',
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey('event', new TableForeignKey({
            columnNames: ["searchId"],
            referencedColumnNames: ["id"],
            referencedTableName: 'search',
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("event");
        if(table) {
            const foreignKeyA = table.foreignKeys.find(fk => fk.columnNames.indexOf("authorId") !== -1);
            if (foreignKeyA) {
                await queryRunner.dropForeignKey("event", foreignKeyA);
            }
            const foreignKeyS = table.foreignKeys.find(fk => fk.columnNames.indexOf("searchId") !== -1);
            if (foreignKeyS) {
                await queryRunner.dropForeignKey("event", foreignKeyS);
            }
            await queryRunner.dropTable("event");
        }
    }
}