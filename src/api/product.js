const express = require('express');
const router = express.Router();
const productService = require('../service/product');
const productValidator = require('../middleware/productValidator');

router.post('/', productValidator ,async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error creating product' });
    }
});    

router.get('/', async (req, res) => {
    try {
        const filters = {
            category: req.query.category || undefined,
            available: req.query.available === 'true' || undefined,
            id: +req.query.id || undefined
        };
        let sortOrder;
        if (req.query.price === 'lowest') {
            sortOrder = { price: 'asc' }; 
        } else if (req.query.price === 'highest') {
            sortOrder = { price: 'desc' };
        }
        const products = await productService.getAllProducts(filters, sortOrder);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const product = await productService.updateProduct(parseInt(req.params.id), req.body);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error updating product' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await productService.deleteProduct(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error deleting product' });
    }
});

module.exports = router;
