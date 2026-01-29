import Sale from '../models/Sale.js';

export const getSalesByMonth = async (month, skip = 0, limit = 100) => {
    const startDate = new Date(`${month}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    return Sale.find({
        saleDate: { $gte: startDate, $lt: endDate }
    })
        .sort({ saleDate: -1 })
        .skip(skip)
        .limit(limit)
        .populate('customer', 'name email')
        .populate('products.product', 'name price') // FIX: populate nested product
        .lean();
};