# Shopify Headless Store Frontend

A modern **Next.js 15** frontend for a Shopify Headless E-commerce application. This application integrates with a custom Express.js backend and Shopify Storefront API to provide a complete shopping experience including Google Authentication, Product Catalog, Cart, Wishlist, Checkout, Orders, and Activity Tracking.

---

## Features

### Authentication

- Google OAuth Login
- JWT Authentication
- Protected Routes
- Persistent Login
- Automatic Logout on Unauthorized Access

### Products

- Product Listing
- Product Details
- Product Search
- Category Filtering
- Responsive Product Grid
- Image Optimization

### Shopping Cart

- Add to Cart
- Update Quantity
- Remove Items
- Cart Summary
- Empty Cart State

### Wishlist

- Add to Wishlist
- Remove from Wishlist
- Wishlist Page

### Checkout

- Shipping Information
- Order Placement
- Order Confirmation

### Orders

- Order History
- Order Summary

### Activity Dashboard

- Activity Timeline
- Activity Summary
- User Actions Tracking

### UI Features

- Responsive Design
- Tailwind CSS
- Loading Skeletons
- Toast Notifications
- Global Error Handling
- 404 Page
- Error Boundary

---

# Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- React Query (TanStack Query)
- Axios
- Google OAuth
- React Hot Toast
- Lucide React Icons

---

# Project Structure

```text
src/
│
├── app/
│   ├── (auth)/
│   │   └── login/
│   ├── (protected)/
│   │   ├── activity/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── orders/
│   │   ├── products/
│   │   └── wishlist/
│   ├── error.js
│   ├── loading.js
│   ├── not-found.js
│   ├── globals.css
│   └── layout.js
│
├── components/
│   ├── activity/
│   ├── auth/
│   ├── cart/
│   ├── checkout/
│   ├── common/
│   ├── layout/
│   ├── product/
│   └── wishlist/
│
├── context/
│
├── hooks/
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
│
├── utils/
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

NEXT_PUBLIC_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID

NEXT_PUBLIC_APP_NAME=Shopify Headless Store
```

---

## Run Development Server

```bash
npm run dev
```

Application will start on

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

Default Backend URL

```
http://localhost:5000/api
```

---

# API Endpoints Used

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /auth/google |
| GET | /auth/me |

---

## Products

| Method | Endpoint |
|---------|----------|
| GET | /products |
| GET | /products/:handle |

---

## Cart

| Method | Endpoint |
|---------|----------|
| GET | /cart |
| POST | /cart |
| PUT | /cart/:variantId |
| DELETE | /cart/:variantId |

---

## Wishlist

| Method | Endpoint |
|---------|----------|
| GET | /wishlist |
| POST | /wishlist |
| DELETE | /wishlist/:productId |

---

## Checkout

| Method | Endpoint |
|---------|----------|
| POST | /checkout |

---

## Orders

| Method | Endpoint |
|---------|----------|
| GET | /checkout/orders |
| GET | /checkout/orders/:id |

---

## Activity

| Method | Endpoint |
|---------|----------|
| GET | /activity/history |
| GET | /activity/summary |

---

# Authentication Flow

```text
Google Login
      │
      ▼
Google OAuth
      │
      ▼
Backend Authentication
      │
      ▼
JWT Token
      │
      ▼
Store in Local Storage
      │
      ▼
Protected Routes
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
   ▼
Add To Cart / Wishlist
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
| npm run dev | Start development server |
| npm run build | Build production application |
| npm start | Start production server |
| npm run lint | Run ESLint |

---

# Performance Optimizations

- Next.js App Router
- Server Components
- React Query Caching
- Image Optimization
- Lazy Loading
- API Request Caching
- Responsive Images

---

# Error Handling

- Global Error Boundary
- Axios Response Interceptors
- Unauthorized Redirect
- Custom 404 Page
- Loading UI
- Toast Notifications

---

# Deployment

## Vercel

```bash
npm install -g vercel
```

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

- Product Pagination
- Product Sorting
- Multiple Product Images
- Product Reviews
- Recently Viewed Products
- Coupon Management
- Payment Gateway Integration
- User Profile Management
- Address Management
- Dark Mode
- Internationalization (i18n)
- Unit Testing
- End-to-End Testing

---

# License

This project is developed as part of the Shopify Headless Store assignment and is intended for educational and demonstration purposes.

---

# Author

**Developer:** Vaibhav Patel

Built with **Next.js**, **React**, **Tailwind CSS**, **React Query**, and **Google OAuth**.