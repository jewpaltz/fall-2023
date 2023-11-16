/* B"H
*/

const { ObjectId, connect } = require('./mongo');
const data = require("../data/products.json");

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

const COLLECTION_NAME = 'products';
async function getCollection() {
  const db = await connect();
  return db.collection(COLLECTION_NAME);
}


/**
 * @returns {Promise<Product[]>} An array of products.
 */
async function getAll() {
  const col = await getCollection();
  return col.find({}).toArray();
}

/**
 * @param {number} id - The product's ID.
 */
function get(id) {
  return data.products.find((product) => product.id === id);
}

function getByCategory(category) {
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

/**
 * @param {Product} product - The product to create.
 * @returns {Product} The created product.
 */
function create(product) {
  const newProduct = {
    id: data.products.length + 1,
    ...product,
  };
  data.products.push(newProduct);
  return newProduct;
}

/**
 * @param {Product} product - The product's data.
 * @returns {Product} The updated product.
 */
function update(product) {
  const index = data.products.findIndex(p => p.id === product.id);
  if(index === -1) {
    throw new Error('Product not found');
  }
  data.products[index] = {
    ...data.products[index],
    ...product,
  };
  return data.products[index];
}

/**
 * @param {number} id - The product's ID.
 */
function remove(id) {
  const index = data.products.findIndex(p => p.id === id);
  if(index === -1) {
    throw new Error('Product not found');
  }
  data.products.splice(index, 1);
}


module.exports = {
  getAll, get, getByCategory, search, create, update, remove,
};