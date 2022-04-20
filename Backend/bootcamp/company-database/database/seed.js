const { PromisedDatabase } = require('promised-sqlite3');

const db = new PromisedDatabase()

async function seed(){
    await db.open('./database/company.db');

    await db.run(`
        INSERT INTO departments('name')
        VALUES
        ('IT'),
        ('Finance'),
        ('Human Resources'),
        ('Marketing'),
        ('Production'),
        ('Research')
    `);
    await db.close()
}
seed()