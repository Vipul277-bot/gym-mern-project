const mongoose=require('mongoose')

const mongourl="mongodb://localhost:27017/GYM_User";

const mongoConnect=async()=>{
    try {
       await mongoose.connect(mongourl); 
       console.log("Connected to mongo");
    } catch (error) {
       console.log("Mongo not connected:",error); 
    }
}

module.exports= mongoConnect;