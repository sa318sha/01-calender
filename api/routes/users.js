var express = require('express');
var router = express.Router();
var goals = require('../components/Data/goals')
var db = require('../components/Database/basicConnection')

/* GET users listing. */
router.get('/', function(req, res) {
  const query = `SELECT * FROM users`

  db.query(query,(err,result)=>{

    if(err) throw err;
    res.send(result)
  })


});

router.post('/', function(req, res) {


  const query = `INSERT INTO users (nameValue) values ('${req.body.name}');`

  db.query(query,(err,result)=>{

    if(err) throw err;
    console.log('result is', result)
  })
  db.query(`SELECT id FROM users WHERE nameValue='${req.body.name}'`,(err,result)=>{

    if(err) throw err;
    console.log('whole id base', result)
    res.send(result)
  })


});



module.exports = router;
