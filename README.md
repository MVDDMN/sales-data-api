## Sales Data API

### Tech Stack
- Node.js
- Fastify
- MongoDB

### Endpoints
GET /api/v1/sales?month=YYYY-MM

### Features
- Monthly sales filtering
- Customer & product relationships
- Clean architecture

### How to Run
npm install
npm run dev

### Admin User Creation
After being connected to the database, run this command "node scripts/createAdmin.js"
to create an admin user for your database.

### Set up .env 
PORT=3000
MONGO_URI=
JWT_SECRET=

### Postman Access
Step 1 : Login
- POST http://localhost:3000/api/v1/auth/login
- Body:
{
  "email": "admin@example.com",
  "password": "admin123"
}
Step 2 : Acquire the token given upon successful login

Step 3 : Access the table and use the GET filter
- GET http://localhost:3000/api/v1/sale/monthly?month=year-month
- Headers:
Authorization : Bearer (Paste login token here)
