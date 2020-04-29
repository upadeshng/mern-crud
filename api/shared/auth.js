// jwt
const jwt = require('jsonwebtoken');

// token
const {accessTokenSecret} = require('./constant');

const authenticateJWT = (req, res, next) => {
    
    // console.log('headers',req.headers)
    console.log('bdy',req.body)

    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, authData) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = authData.user[0];
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = {authenticateJWT}