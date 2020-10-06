const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'egrades'
});

connection.connect( err => {
    if(err) console.log(err);
    return;
});

console.log('banco de dados conectado');

module.exports = (connection);