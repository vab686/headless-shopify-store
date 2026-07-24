# Architecture Document

# Shopify Headless Store Backend Architecture

## Overview

The Shopify Headless Store follows a layered architecture that separates the presentation layer, business logic, data access layer, and external integrations. This separation improves maintainability, scalability, and code organization.

The frontend communicates only with the Express.js backend through REST APIs. The backend manages authentication, business logic, MongoDB operations, and communication with the Shopify Storefront GraphQL API.

```text
                    User
                      │
                      ▼
            React / Next.js Frontend
                      │
                REST API Requests
                      │
                      ▼
             Express.js Backend API
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
   MongoDB Database      Shopify Storefront API
 (Users, Cart, Orders,    (Products, Collections,
 Wishlist, Activity)       Variants, Images)
```

---

# Technology Stack

## Frontend

- Next.js
- React
- Tailwind CSS
- React Query
- Axios

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- Email & Password Authentication
- bcryptjs
- JWT (JSON Web Token)

## External Services

- Shopify Storefront GraphQL API

---

# Backend Architecture

The backend follows a layered architecture where every layer has a single responsibility.

```text
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Models
   │
   ▼
MongoDB
```

---

# Project Structure

```text
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   ├── app.js
│   └── server.js
├── swagger.json
├── postman_collection.json
├── ARCHITECTURE.md
└── README.md
```

---

# Layer Responsibilities

## Routes

Routes define all API endpoints and forward incoming requests to the appropriate controller.

Example

```text
POST /api/auth/login
GET /api/products
POST /api/cart
```

---

## Controllers

Controllers are responsible for

- Receiving HTTP requests
- Validating incoming data
- Calling the appropriate service
- Returning standardized API responses using ApiResponse
- Throwing ApiError when necessary

Controllers do not contain business logic.

---

## Services

Services contain the complete business logic of the application.

Examples include

- User Authentication
- Product Retrieval
- Cart Management
- Wishlist Management
- Checkout
- Order Management
- Activity Tracking

Services communicate with MongoDB and Shopify APIs.

---

## Models

MongoDB collections are managed using Mongoose models.

Collections include

- Users
- Cart
- Wishlist
- Orders
- Activity

---

## Middleware

Middleware is responsible for

- JWT Authentication
- Request Validation
- Error Handling
- 404 Handling
- Logging

---

## Utilities

Reusable helper functions include

- ApiResponse
- ApiError
- asyncHandler
- JWT Utilities
- Logger Utilities

---

# Authentication Flow

The application uses Email and Password Authentication.

```text
User
 │
 ▼
Signup
 │
 ▼
Validate Input
 │
 ▼
Hash Password (bcryptjs)
 │
 ▼
Store User in MongoDB
 │
 ▼
Login
 │
 ▼
Validate Credentials
 │
 ▼
Generate JWT
 │
 ▼
Frontend Stores JWT
 │
 ▼
Protected API Requests
```

Authentication Process

1. User registers using Name, Email, and Password.
2. Password is hashed using bcryptjs.
3. User information is stored in MongoDB.
4. User logs in using Email and Password.
5. Password is verified using bcryptjs.
6. JWT token is generated.
7. Frontend stores the JWT.
8. JWT is sent in the Authorization header for protected APIs.

Example

```http
Authorization: Bearer <jwt_token>
```

---

# Product Flow

```text
Frontend
   │
GET /api/products
   │
Routes
   │
Controller
   │
Product Service
   │
Shopify Storefront GraphQL API
   │
Formatted Response
   │
Frontend
```

Products are fetched directly from Shopify. MongoDB is not used for product storage.

---

# Cart Flow

```text
Frontend
   │
Cart API
   │
Controller
   │
Cart Service
   │
MongoDB Cart Collection
   │
Response
```

The cart is persisted inside MongoDB and linked to the authenticated user.

---

# Wishlist Flow

```text
Frontend
   │
Wishlist API
   │
Controller
   │
Wishlist Service
   │
MongoDB Wishlist Collection
```

Each wishlist item belongs to a specific user.

A unique combination of

```
userId + productId
```

prevents duplicate wishlist entries.

---

# Checkout Flow

```text
Frontend
   │
Checkout API
   │
Controller
   │
Checkout Service
   │
Load Cart
   │
Calculate Total
   │
Create Order
   │
Clear Cart
   │
Store Activity
   │
Response
```

Checkout is implemented as a dummy payment flow for demonstration purposes.

---

# Order Management

Orders are stored inside MongoDB.

Each order contains

- User Information
- Shipping Address
- Ordered Items
- Quantity
- Total Amount
- Order Status
- Created Date

---

# Activity Tracking

The system records important user activities.

Tracked Events

- User Login
- User Logout
- Product Viewed
- Product Search
- Add to Cart
- Remove from Cart
- Wishlist Added
- Wishlist Removed
- Checkout Initiated
- Order Completed

Activities are stored in MongoDB and can be retrieved using

- Activity History API
- Activity Summary API

---

# API Modules

The backend is divided into independent modules.

- Authentication
- Products
- Cart
- Wishlist
- Checkout
- Orders
- Activity

Each module follows the same architecture

```text
Route
   │
Controller
   │
Service
   │
Model
```

---

# Security

The application implements the following security practices.

- Password hashing using bcryptjs
- JWT-based authentication
- Protected API routes
- Input validation using Joi
- Centralized error handling
- Environment variable configuration
- Password excluded from API responses
- CORS enabled
- Helmet security headers
- Winston logging

---

# Scalability

The layered architecture allows the application to scale easily.

Future enhancements include

- Refresh Token Authentication
- Email Verification
- Forgot Password
- Redis Caching
- Payment Gateway Integration
- Background Jobs
- Docker Deployment
- Kubernetes Deployment
- CI/CD Pipeline
- Microservice Architecture

---

# Technical Decisions

## Why Shopify?

Shopify manages

- Products
- Images
- Collections
- Variants
- Inventory

This eliminates the need to maintain a separate product database.

---

## Why MongoDB?

MongoDB stores application-specific data such as

- Users
- Shopping Cart
- Wishlist
- Orders
- Activity Logs

MongoDB's flexible schema makes it suitable for rapidly evolving application data.

---

## Why JWT?

JWT provides

- Stateless Authentication
- Scalability
- Secure API Access
- Easy Frontend Integration

---

## Why Layered Architecture?

Separating Routes, Controllers, Services, and Models provides

- Better Maintainability
- Easier Testing
- Code Reusability
- Cleaner Business Logic
- Better Scalability

---

# Conclusion

The Shopify Headless Store backend follows a clean, modular, and scalable architecture. Business logic is separated from routing and data access, making the codebase easy to maintain and extend.

Email and Password Authentication secured with bcryptjs and JWT provides secure access to protected resources, while Shopify serves as the centralized product catalog and MongoDB manages all application-specific data such as users, carts, wishlists, orders, and activity history.

This architecture is well suited for headless commerce applications and provides a strong foundation for future enhancements such as payment gateway integration, Redis caching, Docker deployment, and microservices.