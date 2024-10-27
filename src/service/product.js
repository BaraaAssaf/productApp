const prisma = require('../data_access/connction');

const createProduct = async (data) => await prisma.product.create({ data });
const getAllProducts = async (filters, sortOrder) => {
    return await prisma.product.findMany({
        where: filters,
        orderBy: sortOrder || undefined,
    });
};
const updateProduct = async (id, data) => await prisma.product.update({ where: { id }, data });
const deleteProduct = async (id) => await prisma.product.delete({ where: { id } });

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
};