var express = require('express');
var router = express.Router();
var databaseConn = require ('../../config/database.js');

//Routes

//INSERT
//@Routes POST api/account/add
//@decs use to add data privately
//@access PRIVATE 

router.post('/add', (req, res) => {
// perform MySQL insert
   sqlQuery = `INSERT INTO account_records (Role, First_Name, Middle_Name, Last_Name, Email, Student_Number, Contact_Number, Username, Password) VALUES ('${req.body.Role}', '${req.body.First_Name}',
    '${req.body.Middle_Name}', '${req.body.Last_Name}', '${req.body.Email}', '${req.body.Student_Number}','${req.body.Contact_Number}', '${req.body.Username}', '${req.body.Password}')`;

   databaseConn.query(sqlQuery, function (error, results, fields) {
       if (error) throw error;
       res.status(200).json(results);
   });
});


//View
router.get('/view',(req,res) => {
    sqlQuery = `SELECT * FROM account_records`;
    databaseConn.query (sqlQuery, function(error,results,fields){
       if(error) throw error;
       res.status(200).json(results)
    })
});

//UPDATE
//routes PUT api/account/update/:id
//@desc Update temperature data by ID
//@access PRIVATE
router.put('/update/:id', (req, res) => {
    const Account_ID = req.params.id;

    // perform MySQL update
    const sqlQuery = `
        UPDATE account_records
        SET
        First_Name = '${req.body.First_Name}',
        Middle_Name = '${req.body.Middle_Name}',
        Last_Name = '${req.body.Last_Name}',
        Email = '${req.body.Email}',
        Student_Number = '${req.body.Student_Number}',
        Contact_Number = '${req.body.Contact_Number}',
        Username = '${req.body.Username}',
        Password = '${req.body.Password}'
        WHERE
        Account_ID = ${Account_ID}`;

    databaseConn.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json(results);
    });
});

//DELETE
// route: DELETE api/account/delete/:id
// @desc: Delete data by ID
// @access: PRIVATE
router.delete('/delete/:id', (req, res) => {
    const Account_ID = req.params.id;

    // perform MySQL delete
    const sqlQuery = `DELETE FROM account_records WHERE Account_ID = ${Account_ID}`;

    databaseConn.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json(results);
    });
});


module.exports = router;