//IMPORTANT!
//Run this first: node scripts/createAdmin.js to create an admin user for your database.
//ONLY RUN ONCE

import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import User from '../src/models/User.js';
import dotenv from 'dotenv';
dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const hashedPassword = await bcrypt.hash('admin123', 10);

await User.create({
    name: 'Admin User',
    email: 'admin@example.com',
    password: hashedPassword,
    role: 'admin'
});

console.log('Admin created');
process.exit();