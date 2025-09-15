import { create } from 'zustand';
import axios from 'axios';
import toast from 'react-hot-toast';

const baseURL = "http://localhost:3000";

export const useProductStore = create((set,get) => ({
    //products state
    products:[],
    loading: false,
    error: null,

    //fetch products action
    fetchProducts: async () => {
        set({loading:true});
        try {
            const response = await axios.get(`${baseURL}/api/products`);
            set({products: response.data.data, error: null});
        } catch (error) {
            if (error.status == 429) set({error: "Too many requests, please try again later.", products: []});
            else set({error: error.message || "An error occurred while fetching products.", products: []});
        }finally {
            set({loading:false});
        }
    },

    deleteProduct: async (id) => {
        set({loading:true});
        try {
            await axios.delete(`${baseURL}/api/products/${id}`);
            //remove product from state
            set({products: get().products.filter(product => product.id !== id)});
            toast.success("Product deleted successfully.");
        } catch (error) {
            set({error: error.message || "An error occurred while deleting the product."});
            toast.error("An error occurred while deleting the product.");
        }finally {
            set({loading:false});
        }
    }
}));