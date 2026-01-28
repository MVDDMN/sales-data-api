import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import authPlugin from './plugins/auth.js';
import authRoutes from './routes/auth.routes.js';
import salesRoutes from './routes/sales.routes.js';
import rateLimit from '@fastify/rate-limit';

// Models
import './models/Customer.js';
import './models/Product.js';
import './models/Sale.js';

const app = Fastify({ logger: { level: 'info' } });

//Register JWT first
await app.register(jwt, {
    secret: process.env.JWT_SECRET || 'SUPER_SECRET_KEY'
});

//Register auth plugin (depends on fastify.jwt)
await app.register(authPlugin);

//Register routes
app.register(authRoutes, { prefix: '/api/v1/auth' });
app.register(salesRoutes, { prefix: '/api/v1/sale' });

//Health check
app.get('/health', async () => ({ status: 'OK' }));

//Rate limit
await app.register(rateLimit, { max: 100, timeWindow: '1 minute' });

export default app;
