var express = require('express');

var router = express.Router();

var dbConn = require('../../config/db');

//Routes
//INSERT
router.post('/add',(req,res)=>{

    var DOI = req.body.DOI;
    var Title = req.body.Title;
    var Date = req.body.Date;
    var Author = req.body.Author;
    var Keywords = req.body.Keywords;
    var Program = req.body.Program;
    var Content = req.body.Content;

    //perform MySQL insert
    sqlQuery = `INSERT INTO doc_details(DOI, Title, Date, Author, Keywords, Program, Content)
    VALUES("${DOI}", "${Title}", '${Date}', '${Author}',"${Keywords}",'${Program}','${Content}')`;

    dbConn.query(sqlQuery, function(error,results, fields){
        if(error) throw error;
    res.status(200).json(results);
    });
});

//VIEW
router.get('/view', (req, res) => {
   
  
    sqlQuery = `SELECT * FROM doc_details`;
    dbConn.query(sqlQuery, function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    });
});

//Update
router.patch('/update/:id', (req, res)=>{
    console.log('API Connected');
    const id = req.params.id;

    dbConn.query(`SELECT id FROM doc_details WHERE id = ${id}`, function(error, results, fields){
        if(error) throw error;
        else if (!results.length){
            console.log("Unidentified ID")
            res.status(400).json("Unidentified ID");
            return;

        } else{
        var DOI = req.body.DOI;
        var Title = req.body.Title;
        var Date = req.body.Date;
        var Author = req.body.Author;
        var Keywords = req.body.Keywords;
        var Program = req.body.Program;
        var Content = req.body.Content;

            dbConn.query(`UPDATE doc_details SET DOI = "${DOI}", Title = "${Title}", Date = '${Date}', Author = "${Author}", Keywords = "${Keywords}", Program = "${Program}", Content = "${Content}" WHERE id = ${id}`, function(error, results, fields){
                console.log("Content Updated");
                if(error) return;
                res.status(200).json(results);
            
            });
        };

    });
});


//Delete
router.delete('/delete/:id', (req,res)=>{

    const id = req.params.id;

    dbConn.query(`SELECT id from doc_details WHERE id = ${id}`, function(error, results, fields){
        if(error) throw error;

        else if (!results.length){
            console.log("ID is unknown")
            res.status(300).json("ID is unknwon");
            return;

        } else {
            dbConn.query(`DELETE from doc_details WHERE id = ${id}`, function(error, results, fields){
                console.log("Data is deleted");
                if(error) return;
                res.status(300).json(results);
            });
        }
    });
});
module.exports = router;
