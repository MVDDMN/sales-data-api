import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import rateLimit from '@fastify/rate-limit';

// Plugins
import authPlugin from './plugins/auth.js';
import errorHandler from './plugins/errorHandler.js';

// Routes
import authRoutes from './routes/auth.routes.js';
import salesRoutes from './routes/sales.routes.js';
import productRoutes from './routes/product.routes.js';
import customerRoutes from './routes/customer.routes.js';

// Models (ensure they are registered)
import './models/Customer.js';
import './models/Product.js';
import './models/Sale.js';

const app = Fastify({ logger: { level: 'info' } });

//CORE PLUGINS//

// JWT
await app.register(jwt, {
    secret: process.env.JWT_SECRET || 'SUPER_SECRET_KEY'
});

// Auth decorator
await app.register(authPlugin);

// Rate limiting
await app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute'
});

// Centralized error handler
await app.register(errorHandler);

// Routes (Adjusted with consistent API prefix)
app.register(async function (api, _opts) {
    api.register(authRoutes, { prefix: '/auth' });
    api.register(salesRoutes, { prefix: '/sales' });
    api.register(productRoutes, { prefix: '/products' });
    api.register(customerRoutes, { prefix: '/customers' });
}, { prefix: '/api/v1' });

// Health Check
app.get('/health', async () => ({ status: 'OK' }));

export default app;