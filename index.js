const express =require('express');
const app=express();
const mongoose = require('mongoose');
const db = require('./connection');
const { boolean } = require('webidl-conversions');


//Createcollection
const Schema = mongoose.Schema;
const UserSchema= new Schema({// I created Object for Main Schema
    firstname:{
        type:String,  
    },
    lastname:{
        type:String,
    },
    age:{
        type:Number,
    },
    Graduated:{
        type:Boolean,
        default:false,
    },
    cars:[{
        model:{
            type:String
        },
        make:{
            type:String
        },
        year:{
            type:Number
        }
    }],
    date : {
        type:Date,
        default:Date.now
    }
})
const User= mongoose.model("Changer",UserSchema)

const newUser = {
    firstname:"Ubaid",
    lastname:"Ok",
    age:13,
    Graduated:true,
    cars:[],
}
const myCar= {
    model:'Tesla',
    make:"Toyota",
    year:2028,
}

newUser.cars.push(myCar);

const user = new User(newUser);

user.save()
  .then(savedUser => {
    console.log('User was created successfully:', savedUser);
  })
  .catch(err => {
    throw err;
  });
app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.listen(3000,()=>{
    console.log('Server started');
})