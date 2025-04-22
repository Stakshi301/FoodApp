require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const connectDB=require('./config/mongoDB');
const userRoute=require('./router/userRoute');
// const path=require('path');

app.use(cors());
app.use(express.json());

connectDB();
const PORT=process.env.PORT||3000;

// const  _dirname=path.resolve();


app.use('/',userRoute);
app.use('/', require('./router/menuRoute'));
app.use('/', require('./router/orderRoute'));

// app.use(express.static(path.join(_dirname,"/frontend/dist")));
// app.get('*',(_,res)=>{
//     res.sendFile(path.resolve(_dirname,"frontend", "dist", "index.html"));
// });

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`); 
    
})