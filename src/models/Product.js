import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    sku: String, // stock keeping unit
    stockQty: Number,
    category: String,
    supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
});

const Product = mongoose.model('Product', productSchema, 'Product');

export default Product;