let express = require('express');
let bodyParser = require('body-parser');
let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo.js');
let {User} = require('./models/user.js');

let app = express();

app.use(bodyParser.json());


app.post('/todos', (req,res)=>{
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    console.log(e);
  })
})

//STARTS SERVER ON PORT 3000 AND PRINTS TO CONSOLE.
app.listen(3000, () =>{
  console.log("Started on port 3000");
});

module.exports = {
  app
};
