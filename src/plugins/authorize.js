export const authorize =
    (...roles) =>
        async (request, reply) => {
            const userRole = request.user.role;

            if (!roles.includes(userRole)) {
                return reply.code(403).send({ message: 'Forbidden' });
            }
        };