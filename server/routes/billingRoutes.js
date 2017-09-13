const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');


//500 = 5 dollars
//req.body.id = token
//see where we put our middleware function, without () to be called every time that someone request this endpoint
module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {

        //El siguiente codigo le cobra a la tarjeta
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });

        //El siguiente codigo guarda en mongo
        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
    });
};