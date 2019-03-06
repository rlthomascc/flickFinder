const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tattooAssistant/newClient');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB has connected');
});


let clientSchema = ({
  assign: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  birthday: String,
  email: {type: String, unique: true},
  address: String,
  address2: String,
  city: String,
  state: String,
  zipCode: Number,
  clientRank: String,
  preferredArt: String,
  notes: String
});

let Client = mongoose.model('Client', clientSchema)


function save(e) {
  let obj = new Client({
    assign: e.assign,
    firstName: e.firstName,
    lastName: e.lastName,
    phoneNumber: e.phoneNumber,
    birthday: e.birthday,
    email: e.email,
    address: e.address,
    address2: e.address2,
    city: e.city,
    state: e.state,
    zipCode: e.zipCode,
    clientRank: e.clientRank,
    preferredArt: e.preferredArt,
    notes: e.notes
  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}



const funcs = {save, Client}
module.exports = funcs;