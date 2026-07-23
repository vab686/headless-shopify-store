const Joi = require("joi");

exports.googleLoginSchema = Joi.object({
    token: Joi.string().required()
});