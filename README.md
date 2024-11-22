## E-commerce Website

A fully-featured website built using the MERN stack `MongoDB` `Express.js` `React` `Node.js`. It provides a seamless online shopping experience, offering dynamic homepage features, product filters, a shopping cart, & checkout functionality integrated with both Razorpay & Stripe payment gateways.

## Features

- **Dynamic Homepage**: Loads dynamically with different categories.
- **Product Filters**: Filter products by price, category, & rating.
- **Shopping Cart**: Add, update, & remove products.🛒
- **Secure Checkout**: Integrated with `Razorpay` & `Stripe`.🔐💳
- **User Authentication**: Secure login/registration using `JWT` & `bcrypt`.🔐
- **Admin Panel**: Manage products & orders, add/edit product images & details.
- **Cloud Storage**: Images managed via `Cloudinary`.

## Tech Stack

- **Frontend**:         `React.js` `Tailwind CSS`
- **Backend**:          `Node.js` `Express.js`
- **Database**:         `MongoDB`
- **Authentication**:   `JWT` `bcrypt`
- **Payments**:         `Razorpay` `Stripe`
- **Image Hosting**:    `Cloudinary`

## 🏗️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Shoaib-Imrann/Zenora.git
cd zenora
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

### 4. Set up environment variables

Create a `.env` file in the backend directory and enter your configuration details.

```bash
JWT_SECRET = ""
ADMIN_EMAIL = ""
ADMIN_PASSWORD = ""

MONGODB_URI = ""

CLOUDINARY_API_KEY = ""
CLOUDINARY_SECRET_KEY = ""
CLOUDINARY_NAME = ""

STRIPE_SECRET_KEY = ""

RAZORPAY_KEY_SECRET = ""
RAZORPAY_KEY_ID = ""
```

### 5. Run the application

`Backend`
```bash
cd backend
npm run server
```

`Frontend`
```bash
cd frontend
npm run dev
```

### Admin Panel Access

Email
```bash
admin@zenora.com
```
Password
```bash
zenora123
```