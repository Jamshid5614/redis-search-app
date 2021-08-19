const UserModel = require('../models/user');



exports.getUsers = async (req,res) => {
    const users = await UserModel.find();
    res.json(users);
}












































