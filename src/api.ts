import axios from "axios";
import { describe } from "node:test";
export interface Product {
    id: number;
    title?: string;
    price?: number;
    description?: string;
}
export async function fetchProducts(): Promise<Product[]>{
    try{
        const response = await axios.get("https://fakestoreapi.com/products");

        return response.data.map((item:any, index:number) => ({
            id: item.id,
            title: index %2 ===0? item.title:undefined,
            price: item.price,
            description:item.description


        }));

    } catch (error){
        console.error("Error fetchinhg products:", error);
        return[];
    }
    
}