import { create } from 'zustand';
import axios from 'axios';
import toast from 'react-hot-toast';

const baseURL = import.meta.env.MODE === "development" ?"http://localhost:3000" : "";

export const useProductStore = create((set,get) => ({
    //products state
    products:[],
    loading: false,
    error: null,
    currentProduct: null,

    // form state
    formData: {
        name: "",
        price: "",
        image: "",
    },

    setFormData: (formData) => set({formData}),
    resetFormData: () => set({formData: {name:"", price:"", image:""}}),

    addProduct: async (e) => {
        e.preventDefault();
        set({loading:true});
        try {
            const {formData} = get()
            await axios.post(`${baseURL}/api/products`, formData);
            await get().fetchProducts();
            get().resetFormData();
            toast.success("Product added successfully")
            document.getElementById("add_product_modal").close()
        } catch (error) {
            console.log("Error in addProduct function: ", error)
            toast.error("Something went wrong")

        } finally {
            set({loading:false});
        }
    },

    //fetch products action
    fetchProducts: async () => {
        set({ loading: true });

        try {
            const response = await axios.get(`${baseURL}/api/products`);

            // Verifica se a API retornou um array ou objeto com data
            const productsData = Array.isArray(response.data)
                ? response.data
                : response.data?.data || [];

            set({ products: productsData, error: null });
        } catch (error) {
            // Diferencia erro de rate limit
            if (error.response?.status === 429) {
                set({ error: "Too many requests, please try again later.", products: [] });
            } else {
                set({
                    error: error.message || "An error occurred while fetching products.",
                    products: [],
                });
            }
        } finally {
            set({ loading: false });
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
    },

    fetchProduct: async (id) => {
        set({ loading:true })

        try {
            const response = await axios.get(`${baseURL}/api/products/${id}`)
            set({ currentProduct: response.data.data,
                formData: response.data.data,
                error: null,
            })
            
        } catch (error) {
            console.log("Error in fetchingProduct", error)
            set({errro:"something in wrong", currentProduct:null})
        }finally {
            set({loading:false})
        }
    },

    updateProduct: async (id) => {
        set({ loading:true })

        try {
            const {formData} = get()
            const response = await axios.put(`${baseURL}/api/products/${id}`, formData)
            set({ currentProduct: response.data.data })
            toast.success("Prodcut update successfully")
            
        } catch (error) {
            toast.error("Something wnet wrong")
            console.log("Erron in updateProduct in: ", error)
        }finally {
            set({loading:false})
        }
    },
}));