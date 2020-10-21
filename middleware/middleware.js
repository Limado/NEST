const fs = require('fs');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const neoLogger = require("../modules/Logger");

async function verifyToken(req, res, next) {
    jwt.verify(req.headers['x-access-header'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            console.log(err.message);
            res.status(403).json({ error: true, message: err.message })
        } else {
            console.log(decoded)
            req.body.userToken = decoded
            next();
        }
    })
}

module.exports = {
    verifyToken: verifyToken
};