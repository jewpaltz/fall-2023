/**
 * @typedef {Object} Product
 * @property {number} id - The product's ID.
 * @property {string} title - The product's title.
 * @property {string} description - The product's description.
 * @property {number} price - The product's price.
 * @property {number} discountPercentage - The product's discount percentage.
 * @property {number} rating - The product's rating.
 * @property {number} stock - The product's stock.
 * @property {string} brand - The product's brand.
 * @property {string} category - The product's category.
 * @property {string} thumbnail - The product's thumbnail.
 * @property {string[]} images - The product's images.
 */

const data = require("../data/products.json");

/**
 * @returns {Product[]} An array of products.
 */
function getProducts() {
  return data.products;
}

/**
 * @param {number} id - The product's ID.
 */
function getProductById(id) {
  return data.products.find((product) => product.id === id);
}

function getProductsByCategory(category) {
  return data.products.filter((product) => product.category === category);
}

function search(query) {
  return data.products.filter((product) => {
    return (
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
  });
}

module.exports = {
  getProducts, getProductById, getProductsByCategory, search
};