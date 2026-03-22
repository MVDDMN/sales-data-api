import {
    createProductService,
    getProductsService,
    getProductByIdService,
    updateProductService,
    deleteProductService
} from '../services/product.service.js';

import { success, error } from '../utils/httpResponse.js';

export const createProduct = async (request, reply) => {
    try {
        const product = await createProductService(request.body);
        return reply.code(201).send(success(product, 'Product created'));
    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};

export const getProducts = async (request, reply) => {
    try {
        const products = await getProductsService();
        return reply.send(success(products, 'Products retrieved'));
    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};

export const getProductById = async (request, reply) => {
    try {
        const product = await getProductByIdService(request.params.id);
        if (!product) {
            return reply.code(404).send(error('Product not found', 404));
        }
        return reply.send(success(product));
    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};

export const updateProduct = async (request, reply) => {
    try {
        const updated = await updateProductService(request.params.id, request.body);
        if (!updated) {
            return reply.code(404).send(error('Product not found', 404));
        }
        return reply.send(success(updated, 'Product updated'));
    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};

export const deleteProduct = async (request, reply) => {
    try {
        const deleted = await deleteProductService(request.params.id);
        if (!deleted) {
            return reply.code(404).send(error('Product not found', 404));
        }
        return reply.send(success(null, 'Product deleted'));
    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};