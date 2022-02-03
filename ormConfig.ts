export default {
    "type": "postgres",
    "host": process.env.DB_HOST || "10.47.91.174",
    "port": process.env.DB_PORT || 5432,
    "username": "postgres",
    "password": process.env.DB_PASSWORD || "Qwerty123",
    "database": process.env.DB_DATABASE || "js21",
    "synchronize": false,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "cli": { "migrationsDir": "src/migration" }
}