export default function authorize(...allowedRoles) {
    return async function (request, reply) {
        const user = request.user;

        if (!user || !allowedRoles.includes(user.role)) {
            return reply.code(403).send({
                status: 'error',
                message: 'Forbidden: insufficient permissions'
            });
        }
    };
}
