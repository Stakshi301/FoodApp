const express=require('express');
const userRoute=express.Router();
const {login,signin}=require('../controller/userController');

userRoute.post('/login',login);
userRoute.post('/signin',signin);

module.exports=userRoute;

