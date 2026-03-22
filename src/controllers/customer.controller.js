import {
    createCustomerService,
    getCustomersService,
    getCustomerByIdService,
    updateCustomerService,
    deleteCustomerService
} from '../services/customer.service.js';

import { success, error } from '../utils/httpResponse.js';

export const createCustomer = async (request, reply) => {
    try {
        const customer = await createCustomerService(request.body);
        return reply.code(201).send(success(customer, 'Customer created'));
    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};

export const getCustomers = async (request, reply) => {
    try {
        const customers = await getCustomersService();
        return reply.send(success(customers));
    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};

export const getCustomerById = async (request, reply) => {
    try {
        const customer = await getCustomerByIdService(request.params.id);
        if (!customer) {
            return reply.code(404).send(error('Customer not found', 404));
        }
        return reply.send(success(customer));
    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};

export const updateCustomer = async (request, reply) => {
    try {
        const updated = await updateCustomerService(request.params.id, request.body);
        if (!updated) {
            return reply.code(404).send(error('Customer not found', 404));
        }
        return reply.send(success(updated, 'Customer updated'));
    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};

export const deleteCustomer = async (request, reply) => {
    try {
        const deleted = await deleteCustomerService(request.params.id);
        if (!deleted) {
            return reply.code(404).send(error('Customer not found', 404));
        }
        return reply.send(success(null, 'Customer deleted'));
    } catch (err) {
        return reply.code(500).send(error('Server error', 500, err.message));
    }
};