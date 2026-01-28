import { getMonthlySales } from '../controllers/sales.controller.js';

export default async function salesRoutes(fastify) {
    fastify.get('/', getMonthlySales);
}