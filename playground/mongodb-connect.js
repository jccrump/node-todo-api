// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//(url where data lives, callback function)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text:"Something to do",
    completed: false
  }, (err, result)=>{
    if (err) {
      console.log('Unable to insert Todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  // db.collection('Users').insertOne({
  //   name: "Justin Crump",
  //   age: 25,
  //   location: "Mckinney"
  // }, (err, result)=>{
  //   if (err){
  //     console.log(err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  client.close();
});
