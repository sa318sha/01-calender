var express = require('express')
var router = express.Router();
var goals = require('../components/Data/goals')
router.get('/', (req,res) =>{
    res.send(goals);

});

router.post('/',(req,res)=>{

    goals[0].goals = [...goals[0].goals,req.body]
    res.json(req.body)
    //can check if new goal is unique if not send a msg back with an error message to provide unique identifier otherwise add the data to the goal list
})



router.delete('/:id',(req,res)=>{

    goals[0].goals = goals[0].goals.filter((goal)=> parseInt(goal.id) !== parseInt(req.params.id))
    res.status(200).send({msg: 'deleted'})

})


module.exports = router;

