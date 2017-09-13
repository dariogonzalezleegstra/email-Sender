//next it's called when the function is completed
//next says who it's the following middleware

module.exports = (req, res, next) => {
    if(!req.user.credits < 1) {
        return res.status(403).send({ error: 'You do not have enough credits. Please, add some clicking in "Buy Credits"'});
    }

    next();
};