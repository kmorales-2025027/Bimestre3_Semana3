import PromptSync from "prompt-sync";
import { createProduct,
    getProducts,
    getProductById,
    calculateIva,
    sellProduct
} from "./service/ProductService";

const prompt = PromptSync();

const readNumber = (message: string): number => {
    return Number(prompt(message));
};

const create = (): void => {
    const name = prompt("Ingrese el nombre del producto: ");
    const basePrice = readNumber("Ingrese el precio del producto: ");
    const stock = readNumber("Ingrese el stock del producto: ");

    if (!name || isNaN(basePrice) || isNaN(stock) || basePrice <= 0 || stock < 0) {
        console.log("Error: Datos inválidos. Por favor, intente nuevamente.");
        return;
    }

    const product = createProduct(name, basePrice, stock);
    console.table(product);
};

const list = (): void => {
    const products = getProducts();

    if (products.length === 0) {
        console.log("Error: No hay productos disponibles.");
        return;
    }

    console.table(products);
};

const search = (): void => {
    const id = readNumber("Ingrese el ID del producto a buscar: ");
    const product = getProductById(id);
    if (!product) {
        console.log("Error: Producto no encontrado.");
        return;
    } 

    console.table(product);
};

const priceWithTaxes = (): void => {
    const id = readNumber("Ingrese el ID del producto a calcular: ");
    const product = getProductById(id);
    if (!product) {
        console.log("Error: Producto no encontrado.");
        return;
    }

    const total = calculateIva(product.basePrice);
    console.log("Subtotal: " + (product.basePrice).toFixed(2));
    console.log("Total: " + total.toFixed(2));
};

const sale = (): void => {
    const id = readNumber("Ingrese el ID del producto a comprar: ");
    const product = getProductById(id);
    if (!product) {
        console.log("Error: Producto no encontrado.");
        return;
    }

    const stock = readNumber("Ingrese la cantidad a comprar: ");
    if (isNaN(stock) || stock <= 0 || stock > product.stock) {
        console.log("Error: Cantidad inválida (Disponible: " + product.stock + ").");
        return;
    }

    const subtotal = sellProduct(product, stock);
    const total = calculateIva(subtotal);

    console.log("Subtotal: " + subtotal.toFixed(2));
    console.log("Total: " + total.toFixed(2));
};

const showMenu = (): void => {
    console.log("\n=== Menú de la Tienda ===");
    console.log("1: Crear producto");
    console.log("2: Listar productos");
    console.log("3: Buscar producto por ID");
    console.log("4: Calcular impuesto de un producto");
    console.log("5: Comprar un producto");
    console.log("0: Salir");
};

let opcion: number = 1;

while (opcion !== 0) {
    showMenu();
    opcion = readNumber("Ingrese una opción: ");

    switch (opcion) {
        case 1:
            create();
            break;
        case 2:
            list();            
            break;
        case 3:
            search();
            break;
        case 4:
            priceWithTaxes();
            break;
        case 5:
            sale();
            break;
        case 0:
            opcion = 0;
            console.log("FIN DEL PROGRAMA.");
            break;
        default:
            console.log("Error: Opción inválida.");
    }   
};