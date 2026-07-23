const Joi = require("joi");

exports.addToCartSchema = Joi.object({
    productId: Joi.string().required(),
    variantId: Joi.string().required(),
    title: Joi.string().required(),
    image: Joi.string().allow(""),
    price: Joi.number().required(),
    quantity: Joi.number().min(1).required()
});

exports.updateCartSchema = Joi.object({
    quantity: Joi.number().min(1).required()
});