const mongoose = require('mongoose');

const connectionString =
    'mongodb+srv://Adrian:m0ngoose@nodetaskmanager.q0idbfy.mongodb.net/NodeTaskManager?retryWrites=true&w=majority';

mongoose
    .connect(connectionString)
    .then(() => console.log("CONNECTED TO THE DB..."))
    .catch((error)=>console.log(error))