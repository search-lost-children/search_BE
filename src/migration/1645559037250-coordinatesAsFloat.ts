import {MigrationInterface, QueryRunner} from "typeorm";

export class coordinatesAsFloat1645559037250 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE coordinates 
                ALTER COLUMN lat TYPE double precision
                USING lat::double precision;
                ALTER TABLE coordinates 
                ALTER COLUMN lng TYPE double precision
                USING lng::double precision;`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
