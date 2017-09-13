const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Survey = mongoose.model('surveys');


module.exports = app => {
    app.post('/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } = req.body;

        //The same as title: title, subject: subject...
        const survey = new Survey ({
            title,
            subject,
            body,
            recipient
        });
    });
};