

const express=require('express');

const router =express.Router();

const Book=require("../model/Book")



router.get('/',async(req,res)=>{
    // This Route will Provide all of the products

    let books;
    try{
        books=await Book.find()
    }catch(err){
        console.log(err)
    };


    // condition

    if(!books){
        return res.status(404).json({message:"No Products Found"})
    }
    return res.status(200).json({books})



})  


module.exports= router;