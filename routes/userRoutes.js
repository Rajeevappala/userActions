
const express = require('express');
const mongoose = require("mongoose");
const User = require('../models/userModels');
const router = express.Router();

// get all users
router.get("/" , async(request , response) => {
    try{
        const showAll = await User.find();
        response.status(200).json(showAll);
    } catch (error){
        console.log(error);
        response.send(400).json({error : error.message});
    }
})

// post users
router.post("/" , async(request,response) => {
    const {name, email , age} = request.body;

    try{
        const userAdded = await User.create({
            name : name,
            email : email,
            age : age
        });
        response.status(201).json(userAdded);

    } catch(error){
        console.log(error);
        response.send(400).json({error : error.message});
    }
})

// get single user

router.get("/:id" , async(request , response) => {
    const {id} = request.params
    try{
        const singleUser = await User.findById({_id : id});
        response.status(200).json(singleUser);
    } catch (error){
        console.log(error);
        response.send(400).json({error : error.message});
    }
})

// delete 

router.delete("/:id" , async(request , response) => {
    const {id} = request.params
    try{
        const singleUser = await User.findByIdAndDelete({_id : id});
        response.status(200).json(singleUser);
    } catch (error){
        console.log(error);
        response.send(400).json({error : error.message});
    }
})

// update 
router.patch("/:id" , async(request , response) => {
    const {id} = request.params;
    const {name , email , age}= request.body;
    try{
        const updateUser = await User.findByIdAndUpdate(id , request.body , {
            new : true,
        });
        response.status(200).json(updateUser);
    } catch (error){
        console.log(error);
        response.send(400).json({error : error.message});
    }
})


module.exports = router;