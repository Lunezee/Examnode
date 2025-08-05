const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/sqlite.db');

class Client {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static createTable() {
        db.run(`CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE
        )`);
    }

    static addClient(name, email, callback) {
        const sql = 'INSERT INTO clients (name, email) VALUES (?, ?)';
        db.run(sql, [name, email], function(err) {
            callback(err, this.lastID);
        });
    }

    static getAllClients(callback) {
        const sql = 'SELECT * FROM clients';
        db.all(sql, [], (err, rows) => {
            callback(err, rows);
        });
    }

    static findClientById(id, callback) {
        const sql = 'SELECT * FROM clients WHERE id = ?';
        db.get(sql, [id], (err, row) => {
            callback(err, row);
        });
    }

    static findClientByEmail(email, callback) {
        const sql = 'SELECT * FROM clients WHERE email = ?';
        db.get(sql, [email], (err, row) => {
            callback(err, row);
        });
    }
}

module.exports = Client;