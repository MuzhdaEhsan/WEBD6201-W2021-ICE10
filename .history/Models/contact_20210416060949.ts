//import mongoose from 'mongoose';
//const {Schema } = mongoose;
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    FullName: String,
    EmailAddress: String,
    ContactNumber: String
},
{
    collection: "contacts"

});

//const Model = mongoose.model('Contact', ContactSchema);

//exports.Model = mongoose_1.default.model("Contact", ContactSchema); 

export const Model = mongoose.model("Contact", ContactSchema);