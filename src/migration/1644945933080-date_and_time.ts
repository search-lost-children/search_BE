import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class dateAndTime1644945933080 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE search 
                ALTER COLUMN date TYPE timestamp
                USING date::timestamp;`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}