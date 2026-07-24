# Shopify Headless Store Frontend

A modern **Next.js 15** frontend for a Shopify Headless E-commerce application. The application integrates with a custom **Express.js** backend and the **Shopify Storefront GraphQL API** to provide a complete shopping experience with **User Registration**, **Email & Password Authentication**, **JWT Authorization**, **Product Catalog**, **Shopping Cart**, **Wishlist**, **Checkout**, **Orders**, and **User Activity Tracking**.

---

# Features

## Authentication & Authorization

- User Registration (Sign Up)
- Email & Password Login
- JWT Authentication
- Protected Routes
- Persistent Login
- Automatic Session Restoration
- Automatic Logout on Unauthorized Access
- Route Protection using Auth Context

---

## Products

- Product Listing
- Product Details
- Product Search
- Category Filtering
- Responsive Product Grid
- Image Optimization

---

## Shopping Cart

- Add to Cart
- Update Quantity
- Remove Items
- Cart Summary
- Empty Cart State

---

## Wishlist

- Add to Wishlist
- Remove from Wishlist
- Wishlist Page

---

## Checkout

- Shipping Information
- Order Placement
- Order Confirmation

---

## Orders

- Order History
- Order Details
- Order Summary

---

## Activity Dashboard

- Activity Timeline
- Activity Summary
- User Action Tracking

---

## UI Features

- Responsive Design
- Tailwind CSS
- Loading States
- Toast Notifications
- Global Error Handling
- Custom 404 Page
- Error Boundary
- Session Persistence

---

# Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- Axios
- React Context API
- TanStack React Query
- React Hot Toast
- Lucide React Icons

---

# Project Structure

```text
src/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   │
│   ├── (protected)/
│   │   ├── activity/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── orders/
│   │   ├── products/
│   │   ├── wishlist/
│   │   └── layout.js
│   │
│   ├── error.js
│   ├── loading.js
│   ├── not-found.js
│   ├── globals.css
│   └── layout.js
│
├── components/
│   ├── activity/
│   ├── auth/
│   │   ├── AuthLayout.jsx
│   │   ├── LoginForm.jsx
│   │   ├── SignupForm.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── cart/
│   ├── checkout/
│   ├── common/
│   ├── layout/
│   ├── product/
│   └── wishlist/
│
├── context/
│   └── AuthContext.js
│
├── hooks/
│   └── useAuth.js
│
├── lib/
│   ├── axios.js
│   ├── constants.js
│   ├── errorHandler.js
│   └── queryKeys.js
│
├── providers/
│
├── queries/
│
├── services/
│   └── auth.service.js
│
├── utils/
│   └── storage.js
│
└── middleware.js
```

---

# Getting Started

## Clone Repository

```bash
git clone <repository-url>
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=Shopify Headless Store
```

---

## Run Development Server

```bash
npm run dev
```

Application will be available at:

```
http://localhost:3000
```

---

# Build Application

```bash
npm run build
```

---

# Start Production Server

```bash
npm start
```

---

# Backend Requirements

The frontend requires the backend server to be running.

Default Backend URL:

```
http://localhost:5000/api
```

---

# API Endpoints Used

## Authentication

| Method | Endpoint | Description |
|----------|----------------|----------------------------|
| POST | /auth/signup | Register a new user |
| POST | /auth/login | Login with Email & Password |
| GET | /auth/me | Get Logged-in User |

---

## Products

| Method | Endpoint |
|----------|----------------------|
| GET | /products |
| GET | /products/:handle |

---

## Cart

| Method | Endpoint |
|----------|----------------------|
| GET | /cart |
| POST | /cart |
| PUT | /cart/:variantId |
| DELETE | /cart/:variantId |

---

## Wishlist

| Method | Endpoint |
|----------|--------------------------|
| GET | /wishlist |
| POST | /wishlist |
| DELETE | /wishlist/:productId |

---

## Checkout

| Method | Endpoint |
|----------|-----------------------|
| POST | /checkout |

---

## Orders

| Method | Endpoint |
|----------|------------------------------|
| GET | /checkout/orders |
| GET | /checkout/orders/:id |

---

## Activity

| Method | Endpoint |
|----------|----------------------------|
| GET | /activity/history |
| GET | /activity/summary |

---

# Authentication Flow

```text
User Registration / Login
            │
            ▼
Email & Password
            │
            ▼
Backend Authentication
            │
            ▼
JWT Token Generated
            │
            ▼
Stored in Local Storage
            │
            ▼
AuthContext Initialization
            │
            ▼
Protected Routes
```

---

# Authentication Architecture

```text
Login / Signup Page
        │
        ▼
LoginForm / SignupForm
        │
        ▼
AuthContext
        │
        ▼
Auth Service
        │
        ▼
Axios Client
        │
        ▼
Express Backend
        │
        ▼
JWT Authentication
        │
        ▼
Local Storage
        │
        ▼
Protected Routes
```

---

# Session Management

The application uses **JWT Authentication** together with **React Context API** for centralized authentication state management.

### Features

- Automatic session restoration
- Persistent authentication after refresh
- Protected routes
- Global authentication state
- Automatic logout on invalid JWT
- Axios Request Interceptor
- Axios Response Interceptor
- Automatic redirect to Login on Unauthorized responses

---

# Application Flow

```text
Sign Up / Login
        │
        ▼
Products
        │
        ▼
Product Details
        │
        ▼
Add to Cart / Wishlist
        │
        ▼
Shopping Cart
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

# Available Scripts

| Command | Description |
|----------|-------------------------------|
| npm run dev | Start Development Server |
| npm run build | Build Production Bundle |
| npm start | Start Production Server |
| npm run lint | Run ESLint |

---

# Performance Optimizations

- Next.js App Router
- Server Components
- React Query Caching
- Context-based Authentication
- Session Restoration
- Axios Interceptors
- Image Optimization
- Lazy Loading
- Responsive Images
- API Request Caching

---

# Error Handling

- Global Error Boundary
- Axios Response Interceptors
- Unauthorized Redirect
- Authentication Error Handling
- Form Validation
- Loading UI
- Custom 404 Page
- Toast Notifications

---

# Deployment

## Vercel

Install Vercel CLI

```bash
npm install -g vercel
```

Deploy

```bash
vercel
```

---

# Browser Support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

# Future Improvements

- Refresh Token Authentication
- User Profile Management
- Address Management
- Product Pagination
- Product Sorting
- Product Reviews
- Multiple Product Images
- Recently Viewed Products
- Coupon Management
- Payment Gateway Integration
- Dark Mode
- Internationalization (i18n)
- Unit Testing
- Integration Testing
- End-to-End Testing

---

# License

This project was developed as part of the **Shopify Headless Store Assignment** and is intended for educational and demonstration purposes.

---

# Author

**Developer:** Vaibhav Patel

Built with **Next.js 15**, **React 19**, **Tailwind CSS**, **TanStack React Query**, **Axios**, **React Context API**, **JWT Authentication**, **Express.js**, **MongoDB**, and the **Shopify Storefront GraphQL API**.