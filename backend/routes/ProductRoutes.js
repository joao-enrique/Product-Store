import express from 'express';
import { createProduct, getAllProducts, getProducts, updateProducts, deleteProducts } from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProducts);

export default router;