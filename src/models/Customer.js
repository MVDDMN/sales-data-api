import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    createdAt: { type: Date, default: Date.now },
    loyaltyPoints: { type: Number, default: 0 },
});

const Customer = mongoose.model('Customer', customerSchema, 'Customer');

export default Customer;