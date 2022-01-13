import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";
import Roles from "../enums/roles.enum"

const tableName = "users"

export class user1642093208301 implements MigrationInterface {

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
                    }
                ),
                new TableColumn({
                    name: 'login',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false
                }),
                new TableColumn({
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                }),
                new TableColumn({
                    name: 'firstName',
                    isNullable: false,
                    type: 'varchar'
                }),
                new TableColumn({
                    name: 'lastName',
                    isNullable: true,
                    type: 'varchar'
                }),
                new TableColumn({
                    name: 'role',
                    type: 'enum',
                    enum: Object.values(Roles)
                }),
                new TableColumn({
                    name:'phoneNumber',
                    type: 'varchar'
                })
            ]
        }), true)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName);
    }

}
