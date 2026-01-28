import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const login = async (request, reply) => {
    const { email, password } = request.body;

    const user = await User.findOne({ email });
    if (!user) {
        return reply.code(401).send({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return reply.code(401).send({ message: 'Invalid credentials' });
    }

    const token = request.server.jwt.sign({
        id: user._id,
        role: user.role
    });

    return reply.send({ token });
};
