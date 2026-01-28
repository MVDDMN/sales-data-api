import Fastify from 'fastify';
import salesRoutes from './routes/sales.routes.js';
import rateLimit from '@fastify/rate-limit';

//Models
import './models/Customer.js';
import './models/Product.js';
import './models/Sale.js';

const app = Fastify({ //Added logging information
    logger: {
        level: 'info'
    }
});

//Routes
app.register(salesRoutes, { prefix: '/api/v1/sale' }); //When introducing v2 to make sure it does not break for client side.

// Health check
app.get('/health', async () => {
    return { status: 'OK' };
});

// default rate limit
await app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute'
});

export default app;