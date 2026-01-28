import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { connectDB } from './config/db.js';

const startServer = async () => {
    await connectDB();

    try {
        await app.listen({ port: process.env.PORT });
        console.log(`Server running on port ${process.env.PORT}`);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

startServer();