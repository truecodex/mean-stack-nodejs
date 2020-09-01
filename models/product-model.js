var db = require('../db');
var dateFormat = require('dateformat');

let model = {
    getProducts: (offset, limit, cb) => {
        return db.query("SELECT * FROM products LIMIT ?, ?", [+offset, +limit], cb);
    },
    getTotalProducts: (cb) => {
        return db.query("SELECT COUNT(*) AS total FROM products", cb);
    },
    getProduct: (id, cb) => {
        return db.query("SELECT * FROM products WHERE id=?", [id], cb);
    },
    addProduct: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            name: input.name,
            sku: input.sku,
            price: input.price,
            is_active: input.is_active,
            created_at: currentDate
        }

        return db.query("INSERT INTO products SET ?", [data], cb);
    },
    updateProduct: (input, cb) => {

        let data = {
            name: input.name,
            sku: input.sku,
            price: input.price,
            is_active: input.is_active,
        }

        return db.query("UPDATE products SET ? WHERE id=?", [data, input.id], cb);
    },
    deleteProduct: (id, cb) => {
        return db.query("DELETE FROM products WHERE id=?", [id], cb);
    }
}

module.exports = model;