const mongose = require('mongoose')

const accountCreateSchema = new mongose.Schema({
     firstname:{
        type:String,
        required:true
     },
     lastname:{
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
     password:{
        type:String,
        required:true
     },
     contactno:{
        type:Number,
        required:true
     },
     email:{
        type:String,
        required:true
     }

})
module.exports = mongose.model('Account',accountCreateSchema)