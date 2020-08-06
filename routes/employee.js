const express = require('express');
const { Router } = require('express');
const router = express.Router();
const mysqlConnection = require('../connection');

router.get('/',(req,res)=>{
    mysqlConnection.query("Select * from EmployeeDetails",(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            res.status(201).send({message: err.toString()});

    });

});

router.get('/:id',(req,res)=>{

    mysqlConnection.query("Select * from EmployeeDetails where id = ?",[req.params.id],(err,rows,fields)=>{

        if(!err)
            res.send(rows);
        
        else
            res.status(201).send({message:err.toString()});
    })

})

router.post('/',(req,res)=>{

    
    const sql = `INSERT INTO EmployeeDetails (name,company,designation,department) VALUES("${req.body.name}","${req.body.company}","${req.body.designation}","${req.body.department}")`;
    mysqlConnection.query(sql , (err,results)=>{
         
        if(err) 
            res.status(504).send({message:err.toString()});
        else 
            res.json({status:'Success'});

    })
});

router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    const sql = `delete from EmployeeDetails where id = ${id}`;
    mysqlConnection.query(sql,(err,results)=>{
        if(!err) 
            res.json({status:'Success'});    
        else 
            res.status(504).send({message:err.toString()});
    });
})

router.put('/:id',(req,res)=>{
    const id = req.params.id;
    const data = req.body;
    const sql = `UPDATE EmployeeDetails SET ? WHERE id = ${id}`
    mysqlConnection.query(sql,data,(err,results)=>{
        if(!err)
           res.send({status:'success'});
        else
            res.status(504).send(err.toString());
    })
});


module.exports = router;