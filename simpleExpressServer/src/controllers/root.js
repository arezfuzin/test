module.exports = {
    root(_, res) {
        return res.status(200).json({ message: 'You have successfully started the application!' });
    },
};
