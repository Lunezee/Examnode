const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/sqlite.db');

class Rental {
    constructor(id, vehicleId, clientId, rentalDate, returnDate) {
        this.id = id;
        this.vehicleId = vehicleId;
        this.clientId = clientId;
        this.rentalDate = rentalDate;
        this.returnDate = returnDate;
    }

    static createTable() {
        const sql = `CREATE TABLE IF NOT EXISTS rentals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            vehicleId INTEGER,
            clientId INTEGER,
            rentalDate TEXT,
            returnDate TEXT,
            FOREIGN KEY (vehicleId) REFERENCES vehicles(id),
            FOREIGN KEY (clientId) REFERENCES clients(id)
        )`;
        return new Promise((resolve, reject) => {
            db.run(sql, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static addRental(vehicleId, clientId, rentalDate) {
        const sql = `INSERT INTO rentals (vehicleId, clientId, rentalDate) VALUES (?, ?, ?)`;
        return new Promise((resolve, reject) => {
            db.run(sql, [vehicleId, clientId, rentalDate], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
        });
    }

    static getRentalsByVehicle(vehicleId) {
        const sql = `SELECT * FROM rentals WHERE vehicleId = ?`;
        return new Promise((resolve, reject) => {
            db.all(sql, [vehicleId], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static getRentalsByClient(clientId) {
        const sql = `SELECT * FROM rentals WHERE clientId = ?`;
        return new Promise((resolve, reject) => {
            db.all(sql, [clientId], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static returnRental(id) {
        const sql = `UPDATE rentals SET returnDate = ? WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.run(sql, [new Date().toISOString(), id], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }
            });
        });
    }
}

module.exports = Rental;