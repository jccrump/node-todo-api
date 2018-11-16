// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//(url where data lives, callback function)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  //(filter, update(operator), options, callback) returns promise if no callback is called
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bef1277a03618eff587d266')
  // },{
  //   //update operator
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bef013eb1c8172328282fca')
  }, {
    $set:{
      name:"Justin"
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  })

  // client.close();
});
