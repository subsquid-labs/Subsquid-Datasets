module.exports = class Data1695903016828 {
    name = 'Data1695903016828'

    async up(db) {
        await db.query(`CREATE TABLE "transaction" ("id" character varying NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "value" text NOT NULL, "timestamp" numeric NOT NULL, "block_number" numeric NOT NULL, "hash" text NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transaction"`)
    }
}
