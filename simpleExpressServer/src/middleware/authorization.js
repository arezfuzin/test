module.exports = {
    authorization(req, res, next) {
        const apiKey = process.env.NODE_ENV === 'test' ? 'test' : process.env.API_KEY;

        if (req.headers['x-api-key'] === apiKey) {
            next();
        } else {
            res.status(401).json({
                message: 'You not have access to do this action !',
            });
        }
    },
};
