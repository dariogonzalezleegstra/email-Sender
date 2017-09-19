const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');


module.exports = app => {
    app.post('/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey ({
            title,
            subject,
            body,
            recipient: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id, //id is available in every mongoose model
            dateSent: Date.now()
        });
    });
};


//title, subject, etc is the same as title: title, subject: subject...
//return { email: email } email.trim() es para sacar los espacios.
//recipient es el array de mails separado por comas. lo descompongo en objetos
