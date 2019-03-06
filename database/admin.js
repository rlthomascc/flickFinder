const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tattooAssistant/Admin');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB has connected');
});


let adminSchema = ({
    username: String,
    fullName: {type: String, unique: true},
    email: {type: String, unique: true},
    title: String,
    password: String
});

let Admin = mongoose.model('Admin', adminSchema)


function save(e) {
    let obj = new Admin({
        username: e.username,
        fullName: e.fullName,
        email: e.email,
        title: e.title,
        password: e.password

    });
    obj.save();
    console.log('Data saved to MongoDB Database');
};



const funcs = {save, Admin}
module.exports = funcs;