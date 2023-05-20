var express = require('express');

var router = express.Router();

const jwt = require('jsonwebtoken');

var dbConn = require('../../config/db');

router.post('/signup', (req,res,next) =>{
    var Name = req.body.Name;
    var Prog = req.body.Prog;
    var Email = req.body.Email;
    var Password = req.body.Password;
    var userId = '';

    try {
        sqlQuery = `INSERT INTO student_details(Stu_Name, Stu_Program, Stu_Email, Password)VALUES("${Name}", "${Prog}", "${Email}", "${Password}")`;
        dbConn.query(sqlQuery,function(error, results){
            console.log(results.insertId);
            userId = results.insertId;
            res.status(200).json({success: true, userId:userId});

        });
    } catch (error) {
        console.log(error);
        return next(error);

    }

    
});

router.post('/login', (req,res,next) =>{
    var Email = req.body.Email;
    var Password = req.body.Password;

    try {
        sqlQuery = `SELECT * FROM student_details WHERE Prof_Email="${Email}"AND Password="${Password}"`;
        dbConn.query(sqlQuery,function(error, results){
            console.log(results);
            Object.keys(results).forEach(function (key){
                var row = results[key];

                var Name = row.Name;
                var Email = row.Email;

                var data ={
                    Name: row.username,
                    Email: row.email
                };

                //Create Token
                token = jwt.sign({data: data}, process.env.SECRET_TOKEN,{expiresIn:'1h'});

                res.status(200).json({success: true, token:token});
            });

        });
    } catch (error) {
        console.log(error);
        return next(error);

    }

    
});

module.exports = router;
