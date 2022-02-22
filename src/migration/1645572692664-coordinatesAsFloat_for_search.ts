import {MigrationInterface, QueryRunner} from "typeorm";

export class coordinatesAsFloatForSearch1645572692664 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE search 
                ALTER COLUMN "coordLat" TYPE double precision
                USING "coordLat"::double precision;
                ALTER TABLE search 
                ALTER COLUMN "coordLong" TYPE double precision
                USING "coordLong"::double precision;`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
