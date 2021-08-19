const mongoose = require('mongoose');



const chatSchema = new mongoose.Schema({
    chatId: Number,
    receiverId: Number
});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    chats: {
        type: [chatSchema],
    }
});


const UserModel = mongoose.model('Users',userSchema);



module.exports = UserModel; 













