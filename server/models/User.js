const mongoose = require('mongoose');
const { Schema } = mongoose;
//Equals to say: const Schema = mongoose.Schema;

//Every user will have:
const userSchema = new Schema({
    googleId: String
})

//Hey mongoose! We want to create a new Collection called 'users'
//with the userSchema (data that all user will have)
mongoose.model('User', userSchema);