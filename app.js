const express=require('express');
const mongoose=require('mongoose')
const router=require("./routes/book-routs")
const app=express();



// Middlware

app.use('/books',router);








// connection of data-base
// Pas:pixchiMbJJjYDwmU
mongoose.connect(`mongodb+srv://admin:pixchiMbJJjYDwmU@cluster0.aztyb.mongodb.net/bookStore?retryWrites=true&w=majority

`)
.then(()=>console.log("Connected to the Data base"))
.then(()=>
app.listen(5000)
)
.catch((err)=>console.log(err))