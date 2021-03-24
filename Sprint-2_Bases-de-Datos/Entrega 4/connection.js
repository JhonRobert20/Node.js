const mongoose = require('mongoose');

const data_base = "mongodb://127.0.0.1:27017/test";

mongoose.connect(data_base, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', _ => {
    console.log("Database is connected to ", data_base )
});

mongoose.connection.on('error', err => {
    console.log(err)
})