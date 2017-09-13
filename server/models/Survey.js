const mongoose = require('mongoose');
const { Schema } = mongoose;
//RecipientSchema will be a SUBCOLLECTION (v. 117, 118)
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],    //Array of RecipientSchemas
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
});

//(nombre del campo en mongo, schema)
mongoose.model('surveys', surveySchema);


// _user: { type: Schema.Types.ObjectId, ref: 'User' }
// quiere decir:
// _ como prefijo se usa cuando va a ser una "foreign key"
// Schema.Types.ObjectId referencia al objectid de un usuario
// con ref: 'User' mongo sabe que te referís al model 'users'
// (sabe que los models son con nombres plurales)