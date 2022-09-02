const express = require('express')
const router = express.Router()
const Account = require('../models/accountmodel')

router.get('/',async(req,res)=>{
       try{
           const account = await Account.find()
           res.json(account)
       }catch (error) {
          res.send("Err"+error)

       }
       res.send("Account get All")  
})

router.post('/', async(req,res)=>{
    const account = new Account({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        gender:req.body.gender,
        dateofbirth:req.body.dateofbirth,
        password:req.body.password,
        contactno:req.body.contactno,
        email:req.body.email
    })

   
})