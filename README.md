# VhiWEB Backend Developer Test - E-Procurement API

This project implements a basic E-Procurement System using Node.js, Express and MongoDB.

## 🔧 Features

- ✅ User Authentication (Register & Login)
- ✅ Vendor Registration
- ✅ Product Catalog (CRUD operations)
- 🔐 JWT-based Authentication

## 📦 Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Bcrypt (Password hashing)

## 📁 Folder Structure

project/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── config/
├── .env
├── server.js


## ⚙️ Setup Instructions

```bash
git clone https://github.com/anuterbang/eproc-api.git
npm install


## ⚙️ Setup Instructions

```bash
git clone https://github.com/anuterbang/eproc-api.git
npm install

Create a .env file:
MONGO_URI=mongodb://localhost:27017/vhiweb_test
JWT_SECRET=secret123

Run the app :
node server.js


📮 API Endpoints
🔐 Auth
| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login and get JWT |


🧾 Vendors
| Method | Endpoint       | Description                      |
| ------ | -------------- | -------------------------------- |
| POST   | `/api/vendors` | Register a vendor (requires JWT) |


📦 Products
| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| GET    | `/api/products`     | Get all products   |
| POST   | `/api/products`     | Create new product |
| PUT    | `/api/products/:id` | Update product     |
| DELETE | `/api/products/:id` | Delete product     |


🔐 Authentication
All endpoints (except login/register) require an Authorization header:
Authorization: Bearer <your_token>

Soal test nomor 2 & 3 bisa check di file screenshoot/VhiWEB Software Engineer Test Case.pdf

Terima kasih