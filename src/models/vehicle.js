const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/sqlite.db');

class Vehicle {
    constructor(id, brand, model, year, available) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.available = available;
    }

    static addVehicle(brand, model, year, available = true) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO vehicles (brand, model, year, available) VALUES (?, ?, ?, ?)';
            db.run(sql, [brand, model, year, available], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
        });
    }

    static listVehicles() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM vehicles WHERE available = 1';
            db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static findVehicleById(id) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM vehicles WHERE id = ?';
            db.get(sql, [id], (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    static findVehiclesByBrand(brand) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM vehicles WHERE brand = ? AND available = 1';
            db.all(sql, [brand], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    static returnVehicle(id) {
        return new Promise((resolve, reject) => {
            const sql = 'UPDATE vehicles SET available = 1 WHERE id = ?';
            db.run(sql, [id], function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.changes);
                }
            });
        });
    }
}

module.exports = Vehicle;