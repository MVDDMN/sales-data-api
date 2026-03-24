## Sales Data API

### Tech Stack
- Node.js
- Fastify
- MongoDB

### Endpoints
GET /api/v1/sales?month=YYYY-MM
GET/PUT/DELETE /api/v1/products/:id
GET/PUT/DELETE /api/v1/customers/:id

### Features
- Monthly sales filtering
- Customer & product relationships
- Clean architecture
- CRUD for Customers and Product

### How to Run
npm install
npm run dev

### Admin User Creation (IMPORTANT)
After being connected to the database, run this command "node scripts/createAdmin.js"
to create an admin user for your database.

### Set up .env
```bash
PORT=3000
MONGO_URI=
JWT_SECRET=
```

### Postman Access
Step 1 : Login
```bash
- POST http://localhost:3000/api/v1/auth/login
- Body:
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

Step 2 : Acquire the token given upon successful login

Step 3 : Access the table and use the GET filter
```bash
- i.e GET http://localhost:3000/api/v1/sale/monthly?month=year-month
- Headers: Authorization : Bearer (Paste login token here)
```
