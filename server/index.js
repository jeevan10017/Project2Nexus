const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Usermodel');

const app = express();                          
app.use(express.json());      //send data in json format
app.use(cors());              //cors middleware

mongoose.connect("mongodb://localhost:27017/new-restro");


app.post("/register", async (req, res) => {
     UserModel.create(req.body)
     .then(employee => res.json(employee))
     .catch(err => res.json(err));
})
app.post("/login",(req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email:email})
     .then(user => {
        if(user){
            if(user.password === password){
                res.json("success");
            }else{
               //give a alert message should pop on a window that password didn't match
                res.send("Password didn't match");
            }
        }else{
            res.json({message: "User is not registered"});
        }
    })
})

app.listen(3001, () => {
    console.log("Server has started at port 3001");
});