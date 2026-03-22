import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/product.controller.js';

import authorize from '../plugins/authorize.js';

export default async function productRoutes(fastify) {

    fastify.post('/', {
        preHandler: [fastify.authenticate, authorize('admin')],
        schema: {
            body: {
                type: 'object',
                required: ['name', 'price'],
                properties: {
                    name: { type: 'string', minLength: 2 },
                    price: { type: 'number', minimum: 0 },
                    stock: { type: 'number', minimum: 0 }
                }
            }
        }
    }, createProduct);

    fastify.get('/', {
        preHandler: [fastify.authenticate],
    }, getProducts);

    fastify.get('/:id', {
        preHandler: [fastify.authenticate],
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string' }
                }
            }
        }
    }, getProductById);

    fastify.put('/:id', {
        preHandler: [fastify.authenticate, authorize('admin')],
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string' }
                }
            },
            body: {
                type: 'object',
                properties: {
                    name: { type: 'string', minLength: 2 },
                    price: { type: 'number', minimum: 0 },
                    stock: { type: 'number', minimum: 0 }
                }
            }
        }
    }, updateProduct);

    fastify.delete('/:id', {
        preHandler: [fastify.authenticate, authorize('admin')],
        schema: {
            params: {
                type: 'object',
                required: ['id'],
                properties: {
                    id: { type: 'string' }
                }
            }
        }
    }, deleteProduct);
}