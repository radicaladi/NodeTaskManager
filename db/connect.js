const mongoose = require('mongoose');

const connectionString =
    'mongodb+srv://Adrian:m0ngoose@nodetaskmanager.q0idbfy.mongodb.net/NodeTaskManager?retryWrites=true&w=majority';

const connectDB = (url) =>{
    return mongoose.connect(connectionString)
}

module.exports = connectDB;