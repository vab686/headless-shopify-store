const axios = require("axios");

const shopifyClient = axios.create({
    baseURL: `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`,
    headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN
    }
});

module.exports = shopifyClient;