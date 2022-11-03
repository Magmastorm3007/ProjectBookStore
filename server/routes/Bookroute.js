const express=require('express')
const router =express.Router()

const Book=require('../models/BookModel')
router.route("/create").post((req,res)=>{
  const title=req.body.title
  const description=req.body.description
  const newBook=new Book({
 title,
 description
  })
  newBook.save()
})
router.route('/book').get((req,res)=>{
    Book.find().then(foundBook=>res.json(foundBook))
})
module.exports=router