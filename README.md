# Cálculo de IVA con TypeScript

## Listado de Funciones

### createProduct
* **Parámetros:** nombre, precio, stock.
* **Retorno:** `Producto`.
* **Propósito:** Crea un objeto de `Producto` y lo inserta en su respectivo arreglo.

### getProducts
* **Parámetros:** VACÍOS.
* **Retorno:** Arreglo de `Producto`.
* **Propósito:** Devuelve todos los productos que han sido registrados.

### getProductById
* **Parámetros:** ID.
* **Retorno:** `Producto` o `Undefined`.
* **Propósito:** Pide un número que permitirá encontrar un producto según su atributo ID. Devuelve `Undefined` si no lo encuentra.

### calculateIva
* **Parámetros:** precio.
* **Retorno:** Número (Precio total con IVA).
* **Propósito:** Utilizando la variable global `IVA_PERCENT`, calcula el impuesto y lo suma al base. También se redondea a dos decimales.

### sellProduct
* **Parámetros:** producto, stock (a comprar).
* **Retorno:** Subtotal (suma de los precios base).
* **Propósito:** Primero, resta el stock pedido al que el producto posee actualmente. Luego, determina el subtotal con una simple multiplicación y aproxima.

---

#### Nota:
Todas las validaciones (valores numéricos, objetos existentes y demás lógica de negocio) están definidas en los métodos de `index.ts`.