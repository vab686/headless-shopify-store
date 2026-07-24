# Shopify Headless Store Backend

## Overview

This project is a custom backend for a Headless Shopify Store built using **Node.js**, **Express.js**, **MongoDB**, and the **Shopify Storefront GraphQL API**.

The backend acts as the primary API layer between the frontend application and Shopify. It handles user authentication, product retrieval, shopping cart management, wishlist management, checkout, order management, and user activity tracking.

---

## Features

- Email & Password Authentication
- JWT-Based Authentication & Authorization
- Password Hashing using bcryptjs
- Protected API Routes
- Shopify Product Listing
- Product Details
- Product Search
- Category/Collection Filtering
- Persistent Shopping Cart
- Wishlist Management
- Dummy Checkout
- Order Management
- User Activity Tracking
- Swagger API Documentation
- Postman Collection

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Shopify Storefront GraphQL API
- JWT (jsonwebtoken)
- bcryptjs
- Joi
- Swagger/OpenAPI
- Winston Logger

---

## Project Structure

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
├── .env.example
├── package.json
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Copy the environment file

```bash
cp .env.example .env
```

Update the following variables

```env
PORT=5000

NODE_ENV=development

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=7d

SHOPIFY_STORE_DOMAIN=your-store.myshopify.com

SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token

SHOPIFY_API_VERSION=2025-01
```

---

## Running the Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# Authentication

The application uses **Email & Password Authentication**.

Authentication Flow

1. User signs up using Name, Email and Password.
2. Password is securely hashed using **bcryptjs**.
3. User information is stored in MongoDB.
4. User logs in using Email and Password.
5. Backend validates the credentials.
6. JWT token is generated.
7. Frontend stores the JWT.
8. Every protected API requires the Authorization header.

Example

```http
Authorization: Bearer <jwt_token>
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get logged in user |

---

### Products

| Method | Endpoint |
|---------|----------|
| GET | `/api/products` |
| GET | `/api/products/:handle` |
| GET | `/api/products/search?q=` |
| GET | `/api/products/category/:handle` |

---

### Cart

| Method | Endpoint |
|---------|----------|
| GET | `/api/cart` |
| POST | `/api/cart` |
| PUT | `/api/cart/:variantId` |
| DELETE | `/api/cart/:variantId` |
| DELETE | `/api/cart` |

---

### Wishlist

| Method | Endpoint |
|---------|----------|
| GET | `/api/wishlist` |
| POST | `/api/wishlist` |
| DELETE | `/api/wishlist/:productId` |

---

### Checkout

| Method | Endpoint |
|---------|----------|
| POST | `/api/checkout` |
| GET | `/api/checkout/orders` |
| GET | `/api/checkout/orders/:id` |

---

### Activity

| Method | Endpoint |
|---------|----------|
| GET | `/api/activity/history` |
| GET | `/api/activity/summary` |

---

# Authentication APIs

## Signup

**POST**

```text
/api/auth/signup
```

Request

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password@123"
}
```

Response

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "token": "<jwt_token>",
    "user": {
      "id": "...",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```

---

## Login

**POST**

```text
/api/auth/login
```

Request

```json
{
  "email": "john@example.com",
  "password": "Password@123"
}
```

Response

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "<jwt_token>",
    "user": {
      "id": "...",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
}
```

---

## Get Current User

**GET**

```text
/api/auth/me
```

Headers

```http
Authorization: Bearer <jwt_token>
```

---

## API Documentation

Swagger Documentation

```text
http://localhost:5000/api-docs
```

---

## Activity Tracking

The application records the following user activities.

- User Login
- User Logout
- Product Viewed
- Product Searched
- Product Added to Cart
- Product Removed from Cart
- Wishlist Added
- Wishlist Removed
- Checkout Initiated
- Order Completed

---

## Security

- Passwords are hashed using bcryptjs.
- Passwords are never stored in plain text.
- JWT is used for stateless authentication.
- Protected APIs require Bearer Token.
- Sensitive configuration is stored in environment variables.
- Password field is excluded from API responses.

---

## Testing

### Signup

```http
POST /api/auth/signup
```

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password@123"
}
```

Expected Response

```text
201 Created
```

---

### Login

```http
POST /api/auth/login
```

```json
{
  "email": "john@example.com",
  "password": "Password@123"
}
```

Expected Response

```text
200 OK
```

---

### Get Current User

```http
GET /api/auth/me
```

Headers

```http
Authorization: Bearer <jwt_token>
```

Expected Response

```text
200 OK
```

---

## Future Improvements

- Refresh Token Support
- Forgot Password
- Email Verification
- Rate Limiting
- Redis Caching
- Docker Support
- Unit Testing
- Integration Testing
- CI/CD Pipeline

---

## License

This project is developed for educational and assessment purposes.

MIT License.