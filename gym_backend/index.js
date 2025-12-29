const express=require('express');
const app=express();
const PORT=5000;
const mongoConnect=require('./db');
const auth=require('./Routes/Auth');
const cors=require('cors');

app.use(cors({
    origin: "http://localhost:3000",  // React domain
    methods: ["GET", "POST"],
    credentials: true
}));

app.listen(PORT,()=>{
    console.log(`Server on ${PORT}`);
});
app.use(express.json());
app.use('/gym',auth)
app.get('/',(req,res)=>{
    res.send("hello vipul");
});

mongoConnect();