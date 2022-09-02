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
 
    try{
        const response = await account.save()
        res.json(response)
    } catch (error) {
        res.send(error)

    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const account = await Account.findById(req.params.id)
        const response = await account.remove()
        res.json(response)

    } catch (error) {
        res.json(err)
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const account = await Account.findById(req.params.id)
        account.firstname = req.body.firstname,
        account.lastname = req.body.lastname,
        account.gender = req.body.gender,
        account.dateofbirth = req.body.dateofbirth,
        account.password = req.body.password,
        account.contactno = req.body.contactno,
        account.email = req.body.email

        const response = await account.save()
        res.json(response)
    } catch(error) {
        res.send(err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const account = await Account.findById(req.params.id)
        res.json(account)
    } catch (error) {
        res.send("Err"+err)
    }
})

module.exports = router