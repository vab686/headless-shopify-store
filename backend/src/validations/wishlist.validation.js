const Joi = require("joi");

exports.addWishlistSchema = Joi.object({
    productId: Joi.string().required(),
    title: Joi.string().required(),
    image: Joi.string().allow(""),
    price: Joi.number().required()
});