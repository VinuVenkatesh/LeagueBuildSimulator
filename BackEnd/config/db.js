require('dotenv').config();
const mongoose = require('mongoose');
const connectToDB = async () =>{
    try{
        mongoose.connect(
            process.env.MONGODB_URI,
            {
                dbName: 'LeagueBuildSimulator'
        });
    }
    catch(err){
        console.log(err);
    }
}
module.exports = connectToDB;