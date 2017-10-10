const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');


module.exports = app => {
    app.post('/surveys', requireLogin, requireCredits, async (req, res) => {
        const {title, subject, body, recipients} = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({email: email.trim()})),
            _user: req.user.id, //id is available in every mongoose model
            dateSent: Date.now()
        });

        try {
            //Send an email
            const mailer = new Mailer(survey, surveyTemplate(survey));
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }


    });
};


//title, subject, etc is the same as title: title, subject: subject...
//return { email: email } email.trim() es para sacar los espacios.
//recipient es el array de mails separado por comas. lo descompongo en objetos
