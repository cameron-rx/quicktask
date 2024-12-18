const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/app'
let connection;
mongoose.Promise = global.Promise;

mongoose.connect(mongoDB).then(result => {
    connection = result.connection;
    console.log("MongoDB Connection Successful");
}).catch(err => {
    console.log("MongoDB Connection Failed");
});