const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'rex',
    password: 'pass123',
    database: 'company'
});

connection.connect((err) => {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected');
    }
});

module.exports = connection;