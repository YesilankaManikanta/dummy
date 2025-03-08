const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./models/userdetail');
const app = express();
const cors = require('cors');

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/phonebook")
    .then(() => {
        console.log("database connected")
    })
    .catch((err) => {
        
        console.log(err)
    })


app.post("/contact", async (req, res) => {
    const data = req.body
    try {
        const push = await userModel.create(data)
        if (push) {
            res.send({ success: true , push : push})
        }
    }
    catch (error) {
        console.log(error)
        res.send({ success: false })
    }
})
app.get("/contact",async(req,res)=>{
    try{
        const data= await userModel.find()
        res.send({success:true , data})

    }
    catch(err){
        console.log(err)
        res.send({success:false, error:err.message})

    }

})
app.delete("/contact/:id",async(req,res)=>{
    const data=req.params.id
    try{
        const del=await userModel.deleteOne({_id:data})
        res.send({success:true, message:"delete successfully"})

    }
    catch(err){
        res.send(err)


    }
})
app.put("/contact/:id",async(req,res)=>{
   
    const data=req.body
    try{
        const update=await userModel.updateOne({_id:req.params.id},data)
        res.send({success:true, message:"update successfully"})

    }
    catch(err){
        res.send({success:false,message:""})

    }
})

//Bharani

app.listen(3000, () => {
    console.log("server connected")
})