const mysql = require('mysql');
let mysqlConnection  = mysql.createConnection({
    host : 'localhost',
    user: 'Ashu1998',
    password : 'password',
    database : 'EmployeeInfo',
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log('Connected with database');

    }
    else{
        console.log('connection failed...');
    }
})

module.exports = mysqlConnection;