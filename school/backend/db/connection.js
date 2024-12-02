const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connection established');
}).catch((error)=>{
    console.log('Error in connection');
    
})
