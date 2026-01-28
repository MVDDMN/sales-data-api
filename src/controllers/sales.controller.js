import { getSalesByMonth } from '../services/sales.service.js';

export const getMonthlySales = async (request, reply) => {
    const { month, page = 1, limit = 10 } = request.query; // default page=1, limit=10

    if (!month) {
        return reply.code(400).send({ message: 'Month is required (YYYY-MM)' });
    }

    const skip = (page - 1) * limit; // calculate the number of documents to skip

    try {
        const sales = await getSalesByMonth(month, skip, Number(limit));

        return reply.code(200).send({
            page: Number(page),
            limit: Number(limit), 
            count: sales.length,
            data: sales
        });

    } catch (error) {
        request.log.error(error);
        return reply.code(500).send({ message: 'Server error' });
    }
};
