import { sql } from "../config/db.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await sql `
            SELECT * FROM products
            ORDER BY created_at DESC
        `;

        console.log("fetched products:", products);
        res.status(200).json({sucess: true, data: products});
    } catch (error) {
        console.log('Error getAllProducts:', error);
        res.status(500).json({sucess: false, message: 'Server Error'});
    }
};

export const createProduct = async (req, res) => {
    const { name, image, price } = req.body;

    if(!name || !image || !price){
        return res.status(400).json({sucess: false, message: 'Please provide name, image and price'});
    }

    try {
        const newProduct = await sql`
            INSERT INTO products (name, image, price)
            VALUES (${name}, ${image}, ${price})
            RETURNING *
        `;

        console.log("created product:", newProduct);
        res.status(201).json({sucess: true, data: newProduct[0]});
    } catch (error) {
        console.log('Error createProduct:', error);
        res.status(500).json({sucess: false, message: 'Server Error'});
    }
};

export const getProducts = async (req, res) => {
    const { id } = req.params;

    try {
         const product = await sql`
            SELECT * FROM products
            WHERE id = ${id}
        `;

        res.status(200).json({sucess: true, data: product[0]});
    } catch (error) {
        console.log('Error getProducts:', error);
        res.status(500).json({sucess: false, message: 'Server Error'});
    }
};

export const updateProducts = async (req, res) => {
    const { id } = req.params;
    const { name, image, price } = req.body;

    try {
        const updateProduct = await sql`
            UPDATE products
            SET name=${name}, image=${image}, price=${price}
            WHERE id=${id}
            RETURNING *
        `

        if(updateProduct.length === 0){
            return res.status(404).json({sucess: false, message: 'Product not found'});
        }

        res.status(200).json({sucess: true, data: updateProduct[0]});

    } catch (error) {
        console.log('Error updateProducts:', error);
        res.status(500).json({sucess: false, message: 'Server Error'});
    }
};

export const deleteProducts = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await sql`
            DELETE FROM products
            WHERE id=${id}
            RETURNING *
        `;

        if(deletedProduct.length === 0){
            return res.status(404).json({sucess: false, message: 'Product not found'});
        }

        res.status(200).json({sucess: true, data: deletedProduct[0]});
    } catch (error) {
        console.log('Error deleteProducts:', error);
        res.status(500).json({sucess: false, message: 'Server Error'});
    }
};