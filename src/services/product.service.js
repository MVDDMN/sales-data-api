import Product from '../models/Product.js';

export const createProductService = async (data) => {
    const existing = await Product.findOne({ name: data.name });
    if (existing) {
        throw new Error('Product already exists');
    }
    return await Product.create(data);
};

export const getProductsService = async () => {
    return await Product.find();
};

export const getProductByIdService = async (id) => {
    return await Product.findById(id);
};

export const updateProductService = async (id, data) => {
    return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProductService = async (id) => {
    return await Product.findByIdAndDelete(id);
};