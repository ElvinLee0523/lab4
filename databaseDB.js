const express = require('express')
const app = express()
const port = 3000  //w3
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const password = "abcdefghij12345"
const saltRound = 5



//app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://0.0.0.0:27017/";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
  
    //await client.db("admin").command({ ping: 1 });      
    //console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

bcrypt.genSalt(saltRound, function(saltError, salt) {
  if (saltError){
    throw saltError
  } else {
    bcrypt.hash(password, salt, function(hashError, hash) {
      if (hashError){
        throw hashError
      } else {
        console.log(hash)
      }
    })
  }
})


/*async function run() {                      /////FIND
  try {
    
    await client.connect();
    const user = await client.db("lab4").
    collection ("lab4").
    find(
      {age: {$gt: 21}},
      {projection: {status : 0}},
      {username: 1}
     ).limit(5).
    toArray();

    console.log(user);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}*/

/*async function run() {                  /////INSERT_ONE
  try {
    
    await client.connect();
    const user = await client.db("lab4").
    collection ("lab4").
    insertOne({
      "username":"tan10",
      "age":"30",
      "status":"pending"
    })

    console.log(user);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}*/

/*async function run() {                  //////INSERT_MANY
    try {
      
      await client.connect();
      const user = await client.db("lab4").
      collection ("lab4").
      insertMany([
        {"username":"tan4",
        "age":24,
        "status":"pending",
        "weight":"45kg"},

        {"username":"tan5",
        "age":25,
        "status":"pending",
        "weight":"45kg"} 
      ])
  
      console.log(user);
  
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }*/

/*async function run() {                  /////UPDATEONE
  try {
    
    await client.connect();
    const user = await client.db("lab4").
    collection ("lab4").
    updateOne({
      "username":"tan1"
    },
    {$set:{
        "age":"21"
    }})

    console.log(user);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}*/

/*async function run() {                  /////UPDATEMANY
    try {
      
      await client.connect();
      const user = await client.db("lab4").
      collection ("lab4").
      updateMany({
        "age":{$lt:25}
      },
      {$set:{
          "weight":"40kg"
      }})
  
      console.log(user);
  
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }*/

  /*async function run() {                  /////REPLACEONE
    try {
      
      await client.connect();
      const user = await client.db("lab4").
      collection ("lab4").
      replaceOne({
        "username":"tan1"
      },
      {username:"tantan1", age:11, status:"married", weight:"42kg"})
  
      console.log(user);
  
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }*/


  /*async function run() {                  /////DELETEONE
    try {
      
      await client.connect();
      const user = await client.db("lab4").
      collection ("lab4").
      deleteOne({
        "username":"tan1"
      },
     )
  
      console.log(user);
  
    } finally {
      // Ensures that t  xhe client will close when you finish/error
      await client.close();
    }
  }*/

  /*async function run() {                  /////DELETEMANY
    try {
      
      await client.connect();
      const user = await client.db("lab4").
      collection ("lab4").
      deleteMany({
        "weight":"45kg"
      },
    )
  
      console.log(user);
  
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }*/


run().catch(console.dir);