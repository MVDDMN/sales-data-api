import Sale from '../models/Sale.js';

export const getSalesByMonth = async (month) => {
    const startDate = new Date(`${month}-01`);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    return Sale.find({
        saleDate: {
            $gte: startDate,
            $lt: endDate
        }
    })
        .populate('customer')
        .populate('products');
};