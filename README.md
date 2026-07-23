# Shopify Headless Store

A full-stack **Headless Shopify E-commerce Application** built as part of a technical assessment. The project uses **Shopify Storefront API** for product management, **Express.js** as the backend API, **MongoDB** for user-specific data, and **Next.js** for the frontend application.

The application demonstrates modern full-stack development practices including authentication, API integration, state management, responsive UI, and clean architecture.

---

# Features

## Authentication

* Google OAuth Login
* JWT Authentication
* Protected Routes
* User Profile

## Product Catalog

* Product Listing
* Product Details
* Search Products
* Category Filtering
* Product Variants
* Responsive Product Grid

## Shopping Features

* Shopping Cart
* Wishlist
* Checkout
* Order History
* Activity Dashboard

## Technical Features

* Shopify Storefront API Integration
* MongoDB Database
* RESTful API
* React Query
* Tailwind CSS
* Global Error Handling
* Toast Notifications
* Responsive Design

---

# Technology Stack

## Frontend

* Next.js 15
* React 19
* Tailwind CSS
* React Query (TanStack Query)
* Axios
* Google OAuth
* React Hot Toast
* Lucide React

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Google OAuth Verification
* Shopify Storefront GraphQL API
* Swagger (OpenAPI)
* Postman Collection

## Database

* MongoDB

## External Services

* Shopify Development Store
* Google OAuth

---

# Repository Structure

```text
headless-shopify-store/
│
├── backend/
│   ├── src/
│   ├── docs/
│   ├── package.json
│   ├── README.md
│   ├── swagger.json
│   ├── postman_collection.json
│   └── ARCHITECTURE.md
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── README.md
│   └── next.config.js
│
├── .gitignore
└── README.md
```

---

# System Architecture

```text
                    +-----------------------+
                    |     Next.js Client    |
                    +-----------+-----------+
                                |
                                | HTTPS / REST
                                |
                    +-----------v-----------+
                    |     Express API       |
                    | Authentication        |
                    | Business Logic        |
                    | Validation            |
                    +-----+-----------+-----+
                          |           |
              MongoDB     |           | Shopify Storefront API
                          |           |
               +----------v-+     +---v----------------+
               | Users      |     | Products           |
               | Cart       |     | Collections        |
               | Wishlist   |     | Variants           |
               | Orders     |     | Images             |
               | Activity   |     +--------------------+
               +------------+
```

---

# Prerequisites

Before running the project, install:

* Node.js (v20 or later)
* npm
* MongoDB
* Git
* Shopify Development Store
* Google OAuth Credentials

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/<YOUR_USERNAME>/headless-shopify-store.git
cd headless-shopify-store
```

---

## 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id

SHOPIFY_STORE_DOMAIN=your-store.myshopify.com

SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token

SHOPIFY_API_VERSION=2025-01
```

Run the backend:

```bash
npm run dev
```

Backend URL:

```
http://localhost:5000
```

---

## 3. Frontend Setup

Open a new terminal.

```bash
cd frontend
npm install
```

Create a `.env.local` file.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api

NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id

NEXT_PUBLIC_APP_NAME=Shopify Headless Store
```

Run the frontend:

```bash
npm run dev
```

Frontend URL:

```
http://localhost:3000
```

---

# API Documentation

Swagger documentation:

```
http://localhost:5000/api-docs
```

Postman collection is available in the backend directory.

```
backend/postman_collection.json
```

---

# Project Documentation

| File                            | Description            |
| ------------------------------- | ---------------------- |
| backend/README.md               | Backend documentation  |
| frontend/README.md              | Frontend documentation |
| backend/swagger.json            | OpenAPI specification  |
| backend/postman_collection.json | API testing collection |
| backend/ARCHITECTURE.md         | Backend architecture   |

---

# Authentication Flow

```text
Google Login
      │
      ▼
Google OAuth
      │
      ▼
Express Backend
      │
Verify Google Token
      │
Generate JWT
      │
      ▼
Frontend Stores JWT
      │
      ▼
Authenticated API Requests
```

---

# Application Flow

```text
Login
   │
   ▼
Products
   │
   ▼
Product Details
   │
   ├───────────────┐
   ▼               ▼
Wishlist        Add To Cart
                    │
                    ▼
                  Cart
                    │
                    ▼
                 Checkout
                    │
                    ▼
                 Orders
                    │
                    ▼
           Activity Dashboard
```

---

# Assignment Requirements Covered

* Shopify Development Store
* 5–10 Products
* Product Variants
* Product Collections
* Google Authentication
* JWT Authentication
* Product Listing
* Product Details
* Shopping Cart
* Wishlist
* Checkout
* Order Management
* Activity Tracking
* REST API
* Swagger Documentation
* Postman Collection
* Architecture Document
* Responsive UI
* Error Handling

---

# Build Commands

## Backend

```bash
cd backend
npm run build
npm start
```

## Frontend

```bash
cd frontend
npm run build
npm start
```

---

# Future Improvements

* Product Reviews
* Payment Gateway Integration
* Address Management
* Coupon System
* Inventory Synchronization
* Product Recommendations
* Pagination
* Sorting
* Unit Testing
* Integration Testing
* CI/CD Pipeline
* Docker Support

---

# License

This project was developed as part of a Shopify Headless Store technical assessment and is intended for educational and demonstration purposes.

---

# Author

**Vaibhav Patel**

Built using **Next.js**, **Express.js**, **MongoDB**, **Shopify Storefront API**, **React Query**, and **Google OAuth**.
