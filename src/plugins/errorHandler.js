import fp from 'fastify-plugin';
import { error as errorResponse } from '../utils/httpResponse.js';

export default fp(async function errorHandler(fastify) {
    fastify.setErrorHandler((err, request, reply) => {
        // Log the error
        fastify.log.error(err);

        // Handle validation errors from Fastify schema
        if (err.validation) {
            return reply.code(400).send(errorResponse('Validation error', 400, err.validation));
        }

        // Handle unauthorized errors
        if (err.statusCode === 401) {
            return reply.code(401).send(errorResponse('Unauthorized', 401));
        }

        // Default to 500 server error
        const status = err.statusCode || 500;
        return reply.code(status).send(errorResponse(err.message || 'Internal server error', status));
    });
});
