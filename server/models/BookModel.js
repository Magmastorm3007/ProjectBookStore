const mongoose=require('mongoose')
const BookSchema={
    title:String,
    description:String

}
const Book=mongoose.model("Book",BookSchema)
module.exports=Book