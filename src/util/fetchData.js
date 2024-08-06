import { products } from "../mock/MockData.js";
export const getProducts = (category) => {

    let filteredProducts = [...products];
    if (category) {
        filteredProducts = products.filter((product) =>
            product.category.includes(category)
        );
    }

    return new Promise((resolve, reject) => {
     if (products.length > 0) {
        setTimeout(() => {
         resolve(filteredProducts);
        }, 2000);
     } else {
        reject("No hay productos");
     }
  });
};

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        const product = products.find((product) => product.id === id);
        setTimeout(() => {
            if (product) {
                resolve(product);
            } else {
                reject("No hay productos");
            }
        }, 2000);
    });
};
