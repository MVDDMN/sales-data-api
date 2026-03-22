import Customer from '../models/Customer.js';

export const createCustomerService = async (data) => {
    if (data.email) {
        const existing = await Customer.findOne({ email: data.email });
        if (existing) throw new Error('Customer already exists');
    }
    return await Customer.create(data);
};

export const getCustomersService = async () => {
    return await Customer.find();
};

export const getCustomerByIdService = async (id) => {
    return await Customer.findById(id);
};

export const updateCustomerService = async (id, data) => {
    return await Customer.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCustomerService = async (id) => {
    return await Customer.findByIdAndDelete(id);
};