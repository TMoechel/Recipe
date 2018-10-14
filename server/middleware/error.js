module.exports = function(err, req, res, next) {
        console.log('Error happened: ', err.message);
        res.status(500).send();
};