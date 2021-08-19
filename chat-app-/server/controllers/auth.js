const UserModel = require('../models/user');
const ChatModel = require('../models/chat');

exports.Login = async (req,res) => {
    try {
        const user = await UserModel.findOne({...req.body});
        if(!user) 
            return res.status(400).json('Email or password is wrong')
    
        res.json(user);
    } catch (error) {
        console.log(error);
    }
} 

exports.SignUp = async (req,res) => {
    const isExistUser = await UserModel.findOne({...req.body});

    if(isExistUser)
        return res.status(400).json('This email exist please enter another email');

    const chats = await ChatModel.find();
    const newChat = await ChatModel.create({
        chatId: chats.length + 1
    });

    const user = await UserModel.create({...req.body,chats: [...newChat]});
    res.json(user);
}









