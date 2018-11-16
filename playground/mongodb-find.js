// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//(url where data lives, callback function)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  //find can be blank if you want all
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos`);
  //   console.log(`Todos count: ${count}`);
  // },(error)=>{
  //   console.log('Unable to fetch todos', error);
  // });

  db.collection('Users').find({name:"Justin Crump"}).toArray().then((todos)=>{
    console.log(todos);
  }, (error) => {
    console.log(error);
  });
  client.close();
});
