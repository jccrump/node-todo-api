const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// let newTodo = new Todo({
//   text:"Cook Dinner",
// });
//
// newTodo.save().then((result)=>{
//   console.log(`Saved todo: ${result}`);
// }, (error)=> {
//   console.log(error);
// });

let User = mongoose.model('User',{
  email: {
    type: String,
    require: true,
    trim:true,
    minlength: 1
  }
});

let newUser = new User({
  email:"Justinc.crump@gmail.com"
});

newUser.save().then((doc)=>{
  console.log(doc);
},(error)=>{
  console.log(error);
});
