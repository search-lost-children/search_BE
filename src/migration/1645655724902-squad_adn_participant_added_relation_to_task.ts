import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class squadAdnParticipantAddedRelationToTask1645655724902 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('task', [
            new TableColumn({
                name: 'squadId',
                type: 'integer',
                isNullable: true
            }),
            new TableColumn({
                name: 'participantId',
                type: 'integer',
                isNullable: true
            })
        ])

        await queryRunner.createForeignKeys('task', [
            new TableForeignKey({
                columnNames: ["squadId"],
                referencedColumnNames: ["id"],
                referencedTableName: 'squad',
                onDelete: "set null"
            }),
            new TableForeignKey({
                columnNames: ["participantId"],
                referencedColumnNames: ["id"],
                referencedTableName: 'participant',
                onDelete: "set null"
            })
        ])

        await queryRunner.dropColumn('task', 'executorId')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
