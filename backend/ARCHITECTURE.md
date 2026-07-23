# Architecture Document

## Overview

The Shopify Headless Store is built using a layered architecture that
separates presentation, business logic, data access, and external
integrations.

    React / Next.js Frontend
              |
              v
     Express.js REST API
              |
       -------------------
       |                 |
    MongoDB        Shopify Storefront
                     GraphQL API

## Technology Stack

-   Frontend: React / Next.js
-   Backend: Node.js + Express.js
-   Database: MongoDB with Mongoose
-   Authentication: Google OAuth + JWT
-   External Service: Shopify Storefront GraphQL API

## Backend Layers

### Routes

Accept HTTP requests and map them to controllers.

### Controllers

Validate requests, invoke services, and return standardized API
responses.

### Services

Contain business logic such as authentication, product retrieval, cart
management, checkout, wishlist, and activity tracking.

### Models

MongoDB collections managed through Mongoose.

### Middleware

Authentication, error handling, validation, and 404 handling.

## Authentication Flow

1.  User signs in with Google.
2.  Frontend receives a Google ID Token.
3.  Backend verifies the ID Token.
4.  User record is created or updated.
5.  Backend issues a JWT.
6.  JWT is used for protected API requests.

## Product Flow

    Frontend
       |
       v
    GET /api/products
       |
    Controller
       |
    Product Service
       |
    Shopify GraphQL API
       |
    Formatted Response
       |
    Frontend

## Cart Flow

    Frontend
       |
    Cart API
       |
    Cart Service
       |
    MongoDB Cart Collection

The cart is persisted in MongoDB and associated with the authenticated
user.

## Wishlist Flow

Wishlist data is stored in MongoDB with a unique `(user, productId)`
constraint to prevent duplicates.

## Checkout Flow

1.  User submits shipping information.
2.  Cart is loaded from MongoDB.
3.  Order total is calculated.
4.  Order is created.
5.  Cart is cleared.
6.  Checkout and order completion activities are logged.

## Activity Tracking

Tracked events: - Login - Logout - Product View - Product Search - Add
to Cart - Remove from Cart - Checkout Initiated - Order Completed

Activities are stored in MongoDB and can be queried through history and
summary endpoints.

## Security

-   JWT protected APIs
-   Google OAuth verification
-   Helmet security headers
-   CORS support
-   Input validation using Joi
-   Centralized error handling

## API Modules

-   Authentication
-   Products
-   Cart
-   Wishlist
-   Checkout & Orders
-   Activity Tracking

## Scalability

The service layer isolates business logic, making it straightforward
to: - add Redis caching, - integrate payment gateways, - support
multiple storefronts, - introduce background jobs, - deploy as
microservices in the future.

## Conclusion

The architecture follows a modular, maintainable design with clear
separation of concerns, making it suitable for a headless commerce
application while remaining easy to extend.
