import { Product } from "./api";
export function validateProduct(product:Product):string[]{
    const errors:string[]=[];
    if(!product.title) errors.push("Missing title");
    if(!product.price) errors.push("Missing Price");
    if(!product.description) errors.push("Missing Descriptiom");

    return errors;
}