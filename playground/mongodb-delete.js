// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//(url where data lives, callback function)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text:"Something to do"}).then((res)=>{
  //   console.log(res);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text:"Somasdfething to do"}).then((res)=>{
  //   console.log(res);
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((res)=>{
  //   console.log(res);
  // })
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5bef01bb3ca13a1ac47d82ba")}).then((results)=>{
    console.log(results);
  })
  // client.close();
});
