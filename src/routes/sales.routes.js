import { getMonthlySales } from '../controllers/sales.controller.js';
import { authorize } from '../plugins/authorize.js';

export default async function salesRoutes(fastify) {
    console.log('fastify.authenticate:', typeof fastify.authenticate); // should print 'function'
    console.log('authorize:', typeof authorize);                       // should print 'function'

    fastify.get(
        '/monthly',
        {
            preHandler: [
                fastify.authenticate,        // now exists
                authorize('admin', 'sales')  // still works
            ]
        },
        getMonthlySales
    );
}