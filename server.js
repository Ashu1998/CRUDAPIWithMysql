
const express = require('express');
const bodyParser = require('body-parser');
const EmployeeRoutes = require('./routes/employee');
const mysqlConnection = require('./connection');

const app = express();

app.use(bodyParser.json());

app.use('/employeeInfo',EmployeeRoutes);



app.listen(3000,(req,res)=>{
    console.log('Server started');
})

