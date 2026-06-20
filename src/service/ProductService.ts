import { Product } from "../model/ProductModel";
import { products } from "../data/ProductData";
import { PORCENTAJE_IVA as IVA_PERCENT } from "../config/TaxConfig";

let nextId = 1;

// Crear producto
export const createProduct = ( 
    name: string, 
    basePrice: number, 
    stock: number
): Product => {
    const product: Product = {
        id: nextId,
        name,
        basePrice,
        stock
    };
    products.push(product);
    nextId++;
    return product;
};

// Listar productos
export const getProducts = (): Product[] => {
    return products;
};

// Buscar producto por ID
export const getProductById = (id: number): Product | undefined => {
    return products.find(product => product.id === id);
};

// Calcular IVA
export const calculateIva = (basePrice: number): number => {
    const tax = basePrice * IVA_PERCENT;
    const total = basePrice + tax;

    const roundTotal = Math.round(total * 100) / 100;

    return roundTotal;
};

// Compra del producto
export const sellProduct = (product: Product, stock: number): number => {
    product.stock -= stock;
    const subtotal = product.basePrice * stock;

    const roundsubTotal = Math.round(subtotal * 100) / 100;

    return roundsubTotal;
};