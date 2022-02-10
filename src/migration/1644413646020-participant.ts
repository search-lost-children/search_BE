import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class participant1644413646020 implements MigrationInterface {
    private participantTableName = 'participant';
    private userTableName = 'user';
    private searchTableName = 'search';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const participantTable = new Table({
            name: this.participantTableName,
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
                    name: 'searchId',
                    type: 'integer',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'userId',
                    type: 'integer',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'accessAllowed',
                    type: 'boolean',
                    default: true
                })
            ]
        })
        await queryRunner.createTable(participantTable)

        await queryRunner.createForeignKey(this.participantTableName, new TableForeignKey({
            columnNames: ["searchId"],
            referencedColumnNames: ["id"],
            referencedTableName: this.searchTableName,
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey(this.participantTableName, new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: this.userTableName,
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable(this.participantTableName);

        if(table) {
            const foreignKey1 = table.foreignKeys.find(fk => fk.columnNames.indexOf("searchId") !== -1);
            const foreignKey2 = table.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
            if (foreignKey1) {
                await queryRunner.dropForeignKey(this.participantTableName, foreignKey1);
            }
            if (foreignKey2) {
                await queryRunner.dropForeignKey(this.participantTableName, foreignKey2);
            }

            await queryRunner.dropTable(this.participantTableName);
        }
    }

}
