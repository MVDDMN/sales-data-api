import fp from 'fastify-plugin';

async function authPlugin(fastify) {
    fastify.decorate('authenticate', async (request, reply) => {
        try {
            await request.jwtVerify();
        } catch (err) {
            reply.code(401).send({ message: 'Unauthorized' });
        }
    });
}

export default fp(authPlugin);