const express=require('express')
const router=express.Router()
const User=require('../models/User')

//path : http://localhost:3000/api/user/adduser
// create user
// public/ private

router.post('/adduser',async(req,res)=>{

    try {
        const newUser= new User({...req.body})




const user= await newUser.save()
res.json(user)
        
    } 
    catch (err) {
        console.log(err)
        
    }
    
})

//path : http://localhost:3000/api/user/getusers
// get users
// public/ private

router.get('/getusers',async(req,res)=>{
    try {
       const users=await User.find()
       res.json(users)
        
    } catch (err) {
        console.log(err)
        
    }
   
})

//path : http://localhost:3000/api/user/deleteusers/:id
// delete users
// public/ private
router.delete('/deleteusers/:id', async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete({_id:req.params.id})
        res.json(user)
        
    } catch (err) {
        console.log(err)
        
    }
})

//path : http://localhost:3000/api/user/updateusers/:id
// update users
// public/ private
router.put('/updateusers/:id', async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.json(user)
        
    } catch (err) {
        console.log(err)
        
    }
})
    

module.exports=router