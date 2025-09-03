const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    mdp : String,
    name : String,
    age : Number,
    adresse :String,
    
});
const user = mongoose.model('users' , userSchema); 
module.exports=user;