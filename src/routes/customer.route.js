import {
    createCustomer,
    getCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
} from '../controllers/customer.controller.js';

import authorize from '../plugins/authorize.js';

export default async function customerRoutes(fastify) {

    fastify.post('/', {
        preHandler: [fastify.authenticate],
        schema: {
            body: {
                type: 'object',
                required: ['name'],
                properties: {
                    name: { type: 'string', minLength: 2 },
                    email: { type: 'string', format: 'email' },
                    phone: { type: 'string' }
                }
            }
        }
    }, createCustomer);

    fastify.get('/', {
        preHandler: [fastify.authenticate]
    }, getCustomers);

    fastify.get('/:id', {
        preHandler: [fastify.authenticate],
    }, getCustomerById);

    fastify.put('/:id', {
        preHandler: [fastify.authenticate],
    }, updateCustomer);

    fastify.delete('/:id', {
        preHandler: [fastify.authenticate, authorize('admin')],
    }, deleteCustomer);
}