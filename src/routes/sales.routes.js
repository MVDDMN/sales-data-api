import { getMonthlySales } from '../controllers/sales.controller.js';
import authorize from '../plugins/authorize.js';

export default async function salesRoutes(fastify) {

    fastify.get('/monthly', {
        preHandler: [
            fastify.authenticate,
            authorize('admin', 'sales')
        ],
        schema: {
            querystring: {
                type: 'object',
                required: ['month'],
                properties: {
                    month: {
                        type: 'string',
                        pattern: '^\\d{4}-\\d{2}$',
                        description: 'Month in YYYY-MM format'
                    }
                }
            }
        }
    }, getMonthlySales);

}