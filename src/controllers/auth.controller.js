import bcrypt from 'bcrypt';
import User from '../models/User.js';
import { success, error } from '../utils/httpResponse.js';

export const login = async (request, reply) => {
    const { email, password } = request.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return reply.code(401).send(error('Invalid credentials', 401));

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return reply.code(401).send(error('Invalid credentials', 401));

        const token = request.server.jwt.sign({ id: user._id, role: user.role });

        return reply.send(success({ token }, 'Login successful'));

    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};