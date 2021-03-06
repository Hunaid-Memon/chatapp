const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json()) // to accept JSON data

app.get('/', (req, res) => {
    res.send("API is running")
});

app.use('/api/user', userRoutes)

// app.get('/api/chat', (req, res) => {
//     res.send(chats)
// });

// app.get('/api/chat/:id', (req, res) => {
//     // console.log(req.params.id);
//     const singleChat = chats.find((c) => c._id === req.params.id)
//     res.send(singleChat)
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server started on port ' + PORT))