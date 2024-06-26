const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKENSECRET;

function generateAccessToken(username, user_id){
    return jwt.sign({username, _id: user_id}, tokenSecret, {expiresIn:"1d"});
}

module.exports={
    generateAccessToken
}