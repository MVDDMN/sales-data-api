import { getSalesByMonth } from '../services/sales.service.js';
import { success, error } from '../utils/httpResponse.js';

export const getMonthlySales = async (request, reply) => {
    const { month } = request.query;

    if (!month) {
        return reply.code(400).send(error('Month is required (YYYY-MM)', 400));
    }

    try {
        const sales = await getSalesByMonth(month);

        const result = sales.map(sale => ({
            customer: sale.customer?.name || 'Unknown',
            products: sale.products?.map(p => ({
                name: p.product?.name || 'Unknown',  // <-- FIXED: use p.product.name
                quantity: p.quantity,
                priceAtSale: p.priceAtSale
            })) || [],
            date: sale.saleDate,
            totalAmount: sale.totalAmount,
            discount: sale.discount,
            status: sale.status
        }));

        return reply.code(200).send(success(result, 'Monthly sales retrieved'));

    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};