import {MigrationInterface, QueryRunner, Table, TableIndex, TableColumn} from "typeorm";

export class searchAddPhotoAndCoordinates1643131965529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("search", [
            new TableColumn({
                name: "coordLat",
                type: "varchar",
                isNullable: true
            }),
            new TableColumn({
                name: "coordLong",
                type: "varchar",
                isNullable: true
            }),
            new TableColumn({
                name: "address",
                type: "varchar",
                isNullable: true
            }),
            new TableColumn({
                name: "info",
                type: "varchar",
                isNullable: true
            }),
            new TableColumn({
                name: "photo",
                type: "bytea",
                isNullable: true
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns("search", ["coordLat", "coordLong", "address", "info", "photo"]);
    }

}
