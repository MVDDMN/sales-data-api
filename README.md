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
