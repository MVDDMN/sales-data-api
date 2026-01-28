import Fastify from 'fastify';
import salesRoutes from './routes/sales.routes.js';

//Models
import './models/Customer.js';
import './models/Product.js';
import './models/Sale.js';

const app = Fastify({ logger: true });

//Routes
app.register(salesRoutes, { prefix: '/api/sale' });

// Health check
app.get('/health', async () => {
    return { status: 'OK' };
});

export default app;