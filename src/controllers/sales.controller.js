import { getSalesByMonth } from '../services/sales.service.js';

export const getMonthlySales = async (request, reply) => {
    const { month } = request.query;

    if (!month) {
        return reply.code(400).send({ message: 'Month is required (YYYY-MM)' });
    }

    try {
        const sales = await getSalesByMonth(month);

        // If no sales found, return empty array
        if (!sales || sales.length === 0) {
            return reply.code(200).send([]);
        }

        const result = sales.map(sale => ({
            customer: sale.customer?.name || 'Unknown',
            products: sale.products?.map(p => p.name) || [],
            date: sale.saleDate
        }));

        return reply.code(200).send(result);

    } catch (error) {
        console.error(error);
        return reply.code(500).send({ message: 'Server error' });
    }
};