import Sale from '../models/Sale.js';

export const getSalesByMonth = async (month, skip, limit) => {
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
        .populate('products', 'name price')
        .lean(); //For performance benefit
};
