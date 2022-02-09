import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";
import Roles from "../enums/roles.enum";

const tableName = "coordinates"
const searchTableName = "search"
const userTableName = "user"




export class Coordinates1643909424799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
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
                new TableColumn({
                    name: 'lng',
                    type: 'varchar',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'lat',
                    type: 'varchar',
                    isNullable: false
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
                    name: 'time',
                    isNullable: false,
                    type: 'timestamp'
                }),
            ]
        });

        await queryRunner.createTable(table)

        await queryRunner.createForeignKey(tableName, new TableForeignKey({
            columnNames: ["searchId"],
            referencedColumnNames: ["id"],
            referencedTableName: searchTableName,
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey(tableName, new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: userTableName,
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable(tableName);

            if(table) {
                const foreignKey1 = table.foreignKeys.find(fk => fk.columnNames.indexOf("searchId") !== -1);
                const foreignKey2 = table.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
                if (foreignKey1) {
                    await queryRunner.dropForeignKey(tableName, foreignKey1);
                }
                if (foreignKey2) {
                    await queryRunner.dropForeignKey(tableName, foreignKey2);
                }

                await queryRunner.dropTable(tableName);
            }
    }
}


