import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String }
});

const Customer = mongoose.model('Customer', customerSchema, 'Customer');

export default Customer;