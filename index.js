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
    }]
    
})

const User= mongoose.model("Changer",UserSchema)


app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.listen(3000,()=>{
    console.log('Server started');
})