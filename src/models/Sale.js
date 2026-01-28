import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    saleDate: { type: Date, required: true }
});

const Sale = mongoose.model('Sale', saleSchema, 'Sale');

export default Sale;