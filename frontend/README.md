# Shopify Headless Store Frontend

A modern **Next.js 15** frontend for a Headless Shopify Store. The application provides a complete e-commerce user interface that communicates with a custom backend API for authentication, product browsing, shopping cart, wishlist, checkout, orders, and activity tracking.

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
- Update Item Quantity
- Remove Items
- Cart Summary
- Empty Cart State

---

## Wishlist

- Add Products to Wishlist
- Remove Products from Wishlist
- Wishlist Management

---

## Checkout

- Shipping Information Form
- Order Review
- Place Order
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
- User Activity Tracking

---

## User Interface

- Responsive Design
- Tailwind CSS
- Loading States
- Global Error Handling
- Toast Notifications
- Error Boundary
- Custom 404 Page

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

# Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=Shopify Headless Store
```

---

# Run Development Server

```bash
npm run dev
```

Application will be available at:

```
http://localhost:3000
```

---

# Build for Production

```bash
npm run build
```

---

# Start Production Server

```bash
npm start
```

---

# Frontend Architecture

```text
User
 │
 ▼
Pages (App Router)
 │
 ▼
Components
 │
 ▼
React Context (Authentication)
 │
 ▼
Services
 │
 ▼
Axios Client
 │
 ▼
Backend REST APIs
```

---

# Authentication Flow

```text
Sign Up / Login
        │
        ▼
Email & Password
        │
        ▼
JWT Token
        │
        ▼
Store Token
(Local Storage)
        │
        ▼
AuthContext
        │
        ▼
Protected Routes
```

---

# Session Management

The frontend uses **React Context API** together with **JWT Authentication** to manage user sessions.

Features include:

- Persistent Login
- Automatic Session Restoration
- Protected Pages
- Global Authentication State
- Automatic Logout on Unauthorized Requests
- Axios Request Interceptor
- Axios Response Interceptor

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

# Available Scripts

| Command | Description |
|----------|-------------|
| npm run dev | Start Development Server |
| npm run build | Build Production Bundle |
| npm start | Start Production Server |
| npm run lint | Run ESLint |

---

# Performance Optimizations

- Next.js App Router
- React Query Caching
- Axios Interceptors
- Lazy Loading
- Image Optimization
- Responsive UI
- Session Restoration
- Context-based Authentication

---

# Error Handling

- Global Error Boundary
- Axios Response Interceptors
- Authentication Error Handling
- Unauthorized Redirect
- Loading UI
- Custom 404 Page
- Toast Notifications

---

# Browser Support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

# Future Enhancements

- Product Pagination
- Product Sorting
- Product Reviews
- Multiple Product Images
- Recently Viewed Products
- User Profile Page
- Address Management
- Coupon Support
- Payment Gateway Integration
- Dark Mode
- Internationalization (i18n)
- Unit Testing
- End-to-End Testing

---

# License

This frontend application was developed as part of the **Shopify Headless Store Assignment** and is intended for educational and demonstration purposes.

---

# Author

**Developer:** Vaibhav Patel

Built with **Next.js 15**, **React 19**, **Tailwind CSS**, **TanStack React Query**, **Axios**, and **React Context API**.