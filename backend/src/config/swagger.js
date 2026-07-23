const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Shopify Headless Store API",
            version: "1.0.0",
            description: "Backend API Documentation"
        },
        servers: [
            {
                url: "http://localhost:5000/api"
            }
        ]
    },
    apis: ["./src/routes/*.js"]
};

const specs = swaggerJsDoc(options);

module.exports = {
    swaggerUi,
    specs
};