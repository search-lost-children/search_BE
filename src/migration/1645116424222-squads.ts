import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";
import SearchStates from "../enums/searchStates.enum";

const tableName = "squad"

export class squads1645116424222 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
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
                    name: 'coordinatorId',
                    type: 'integer',
                }
            ]
        }))
        await queryRunner.addColumns("participant", [
            new TableColumn({
                name: "squadId",
                type: 'integer',
                isNullable: true
            })
        ]);
        await queryRunner.createForeignKey(tableName, new TableForeignKey({
            columnNames: ['coordinatorId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'coordinator',
            onDelete: 'SET NULL'
        }))
        await queryRunner.createForeignKey('participant', new TableForeignKey({
            columnNames: ['squadId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'squad',
            onDelete: 'SET NULL'
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}