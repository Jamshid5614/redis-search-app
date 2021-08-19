const ChatModel = require('../models/chat');

exports.createChat = async (req,res) => {
    const chats = await ChatModel.find();
    const chat = await ChatModel.create({
        ...req.body,
        chatId: chats.length + 1
    });
    res.json(chat);
}

exports.getChat = async (req,res) => {
    const {senderId} = req.query;
    const chats = await ChatModel.find();
    const myMessages = [];
    const myChat = chats.map(item => {
        item.messages.map(item => {
            if(item.senderId == senderId) {
                myMessages.push(item);
            } else {

            }
        })
    });

    const myChat2 = chats.map(item => {
        item.messages.map(item => {
            if(item.receiverId == senderId) {
                myMessages.push(item);
            } else {

            }
        })
    });

    if(myMessages.length == 0) 
        return res.json([]);

    res.json(myMessages);

}

exports.updateChat = async (req,res) => {
    const {myId,chatId,message,receiverId} = req.body;

    const chat = await ChatModel.updateOne({ chatId }, { $set: {senderId: myId,message,actionType: 'send',receiverId}}/* messages: [{},{},{}]*/);
    res.json(chat);
}

exports.getChats = async (req,res) => {
    const chats = await ChatModel.find();
    res.json(chats);
}





























