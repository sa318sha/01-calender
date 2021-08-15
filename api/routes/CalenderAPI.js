var express = require('express')
var router = express.Router();
var goals = require('../components/Data/goals')
var db = require('../components/Database/basicConnection')

router.get('/', (req,res) =>{
    const query = `SELECT * FROM goals`
    console.log('hehe')
    db.query(query,(err,result)=>{
        console.log(result)
        if(err) throw err;
        res.send(result)
    })
    
});

router.post('/',(req,res)=>{
    console.log(req.body)
    const {index, goal, date} = req.body
    
    // goals[index].goals = [...goals[index].goals,{id,goal,date}]

    // res.json(req.body)
    var query = `INSERT INTO goals (user_id, goal, date) values (${parseInt(index)},'${goal}', '${date}');`
    console.log(query)

    db.query(query,(err,result)=>{
        console.log('test2') 
        console.log('result is',result)
        if(err) throw err;
        //res.json(result)
     })
    console.log('test3') 
    var query = `SELECT * FROM goals where user_id= ${parseInt(index)} and goal ='${goal}';`
    console.log(query)
    db.query(query,(err,result)=>{
        console.log('test4') 
        console.log('result in second query is',result)
        if(err) throw err;
        res.json(result)
    })
    // console.log('test5') 
    //can check if new goal is unique if not send a msg back with an error message to provide unique identifier otherwise add the data to the goal list
})



router.delete('/:id/:index',(req,res)=>{

    const query = `delete from goals where id=${parseInt(req.params.id)} and user_id=${parseInt(req.params.index)}; `
    console.log('query is',query);
    db.query(query,(err,result)=>{

    if(err) throw err;
    res.send(result)
    })

})


module.exports = router;

