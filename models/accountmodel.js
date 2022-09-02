const mongose = require('mongoose')

const accountCreateSchema = new mongose.Schema({
     firstname:{
        type:String,
        required:true
     },
     surname:{
        type:String,
        required:true
     },
     gender:{
        type:String,
        required:true
     },
     dateofbirth:{
        type:String,
        required:true
     },
     
})