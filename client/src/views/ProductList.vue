<script setup lang="ts">
import { getProducts, type Product } from '@/model/products';
import { addToCart } from '@/model/shoppingCart';
import { ref } from 'vue'

const products = ref([] as Product[])

getProducts().then((data) => {
  products.value = data
})



</script>

<template>
  <div>
    <h1 class="title">
      Product List
    </h1>

    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="product.thumbnail" :alt="product.title" />
        <h3 class="title is-3">{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p>
          <span>$</span>
          <i class="price">{{ product.price }}</i>
          <button class="button is-success"  @click.prevent="addToCart(product)" >+</button>
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>

.product-list {
  display: flex;
  flex-wrap: wrap;
  background-color: aliceblue;
}

.product {
  flex-basis: 15rem;
  flex-grow: 1;
  margin: 1rem;
  padding: .5rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: .5rem;
  box-shadow: 0 0 1rem #0004;
}

.price {
  font-size: 2em;
  font-weight: bold;
  margin-right: .5rem;
}

</style>