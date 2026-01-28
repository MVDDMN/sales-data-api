import mongoose from 'mongoose';

const saleSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true, min: 1 },
        priceAtSale: { type: Number, required: true } // store price at sale, not current price
    }],
    saleDate: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'completed', 'refunded'], default: 'completed' }, //Status Tracking Pending, Completed, Refunded
    discount: { type: Number, default: 0 },
    totalAmount: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // admin/sales rep
}, { timestamps: true });

// Indexes for performance
saleSchema.index({ saleDate: 1 });
saleSchema.index({ customer: 1 });

const Sale = mongoose.model('Sale', saleSchema, 'Sale');

export default Sale;