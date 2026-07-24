const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ApiError = require("../utils/ApiError");

class AuthService {
    async signup({ name, email, password }) {
        const existingUser = await User.findOne({ email: email.toLowerCase().trim() });

        if (existingUser) {
            throw new ApiError("User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email: email.toLowerCase().trim(),
            password: hashedPassword
        });

        const token = this.generateToken(user._id);

        return {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        };
    }

    async login({ email, password }) {
        const user = await User.findOne({ email: email.toLowerCase().trim() });

        if (!user) {
            throw new ApiError("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            throw new ApiError("Invalid email or password");
        }

        const token = this.generateToken(user._id);

        return {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        };
    }

    async getCurrentUser(userId) {
        const user = await User.findById(userId).select("-password");

        if (!user) {
            throw new ApiError("User not found");
        }

        return user;
    }

    generateToken(userId) {
        return jwt.sign(
            {
                userId
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );
    }
}

module.exports = new AuthService();