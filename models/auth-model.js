var db = require("../db");

let model = {
    signup: (input, cb) => {
        let data = {
            username: input.username,
            password: input.password,
            email: input.email,
            first_name: input.first_name,
            last_name: input.last_name,
            is_active: 1
        };

        return db.query("INSERT INTO users SET ?", [data], cb);
    },
    findOne: (username, cb) => {
        return db.query("SELECT * FROM users WHERE username=? AND is_active=1", [username], cb);
    },
    findById: (id, cb) => {
        return db.query("SELECT * FROM users WHERE id=? AND is_active=1", [id], cb);
    }
}

module.exports = model;