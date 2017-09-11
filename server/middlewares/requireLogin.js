//next it's called when the function is completed
//next says who it's the following middleware
module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({ error: 'Please, log in to use this feature'});
    }

    next();
};