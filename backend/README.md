# Shopify Headless Store Backend

## Overview

This project is a custom backend for a Headless Shopify Store built with
**Node.js**, **Express.js**, **MongoDB**, and the **Shopify Storefront
GraphQL API**.

It provides: - Google OAuth Authentication - JWT-based Authorization -
Shopify Product APIs - Shopping Cart - Wishlist - Checkout (Dummy
Payment) - Order Management - User Activity Tracking - Swagger API
Documentation

------------------------------------------------------------------------

## Tech Stack

-   Node.js
-   Express.js
-   MongoDB + Mongoose
-   Shopify Storefront GraphQL API
-   Google OAuth
-   JWT
-   Joi
-   Swagger
-   Winston

------------------------------------------------------------------------

## Project Structure

``` text
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validations/
│   ├── app.js
│   └── server.js
├── .env.example
├── package.json
├── README.md
└── postman_collection.json
```

## Features

-   Google OAuth Login
-   JWT Authentication
-   Protected Routes
-   Shopify Product Listing
-   Product Details
-   Product Search
-   Category Filtering
-   Persistent Shopping Cart
-   Wishlist
-   Dummy Checkout
-   Order Management
-   User Activity Tracking
-   Swagger Documentation

## Installation

``` bash
git clone <repository-url>
cd backend
npm install
```

## Environment Variables

Copy the example file:

``` bash
cp .env.example .env
```

Update:

``` env
PORT=5000
NODE_ENV=development
MONGODB_URI=
JWT_SECRET=
JWT_EXPIRES_IN=7d
GOOGLE_CLIENT_ID=
SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_TOKEN=
SHOPIFY_API_VERSION=2025-01
```

## Run the Project

Development:

``` bash
npm run dev
```

Production:

``` bash
npm start
```

## API Endpoints

### Authentication

-   POST `/api/auth/google`
-   GET `/api/auth/me`

### Products

-   GET `/api/products`
-   GET `/api/products/:handle`
-   GET `/api/products/search?q=`
-   GET `/api/products/category/:handle`

### Cart

-   GET `/api/cart`
-   POST `/api/cart`
-   PUT `/api/cart/:variantId`
-   DELETE `/api/cart/:variantId`
-   DELETE `/api/cart`

### Wishlist

-   GET `/api/wishlist`
-   POST `/api/wishlist`
-   DELETE `/api/wishlist/:productId`

### Activity

-   GET `/api/activity/history`
-   GET `/api/activity/summary`

### Checkout

-   POST `/api/checkout`
-   GET `/api/checkout/orders`
-   GET `/api/checkout/orders/:id`

## API Documentation

After starting the server:

    http://localhost:5000/api-docs

## Authentication Flow

1.  User signs in with Google.
2.  Frontend sends Google ID Token to the backend.
3.  Backend verifies the token.
4.  User is created (if required).
5.  Backend generates a JWT.
6.  Frontend uses the JWT for authenticated requests.

## Activity Tracking

Tracked events: - Login - Logout - Product Viewed - Product Searched -
Product Added to Cart - Product Removed from Cart - Checkout Initiated -
Order Completed

## Future Improvements

-   Refresh Tokens
-   Rate Limiting
-   Redis Caching
-   Unit & Integration Tests
-   Docker Support
-   CI/CD Pipeline

## License

MIT
