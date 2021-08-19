const mongoose = require('mongoose');
const express = require('express');
const app = express();
const chatRoutes = require('./routes/chat');
const authRoutes = require('./routes/auth');
const userRoute = require('./routes/getUsers');
const PORT = process.env.PORT || 3002;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/',chatRoutes);
app.use('/',authRoutes);
app.use('/',userRoute);


mongoose.connect('mongodb://localhost:27017/chat-app',{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('successfully connected to mongodb'))
    .catch(err => console.log('Mongodb connection Error: ',err))

    const connection = mongoose.connection;

    connection.once('open', () => {
        const chatStream = connection.collection('users').watch();
        chatStream.on('change', (data) => {
            consoel.log('****************** CHATS ***********', JSON.stringify(data, null, 2))
        });
    })

app.listen(PORT, () => console.log(`Server running on ${PORT} port...`));



























