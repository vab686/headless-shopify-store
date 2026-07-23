const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const verifyGoogleToken = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID
    });

    return ticket.getPayload();
};

const findOrCreateUser = async (payload) => {
    let user = await User.findOne({
        googleId: payload.sub
    });

    if (!user) {
        user = await User.create({
            googleId: payload.sub,
            name: payload.name,
            email: payload.email,
            picture: payload.picture
        });
    }

    return user;
};

module.exports = {
    verifyGoogleToken,
    findOrCreateUser
};