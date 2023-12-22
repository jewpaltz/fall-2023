<script setup lang="ts">
import { getProducts, searchProducts, type Product } from '@/model/products';
import { addToCart } from '@/model/shoppingCart';
import { ref } from 'vue'

const products = ref([] as Product[])

getProducts().then((data) => {
  products.value = data
})

const filteredProducts = ref([] as Product[])
const query = ref('')
const selected = ref({} as Product)

const itemProjectionFunction = (item: Product) => item.title

function selectItemEventHandler(item: Product) {
  selected.value = item
}

function onInputEventHandler(value: string) {
  query.value = value
  searchProducts(value).then((data) => {
    filteredProducts.value = data
  })
}

</script>

<template>
  <div>
    <h1 class="title">
      Product List
    </h1>

    <vue3-simple-typeahead
      placeholder="Select a product"
      class="input"
      :items="filteredProducts"
      :minInputLength="1"
      :itemProjection="itemProjectionFunction"
      @selectItem="selectItemEventHandler"
      @onInput="onInputEventHandler"
    >

      <template #list-item-text="slot">
        
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="slot.item.thumbnail">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <h6 class="is-6" v-html="slot.boldMatchText(slot.item.title)"></h6>
              <span v-html="slot.boldMatchText(slot.item.description)"></span>
            </div>
          </div>
        </article>
      </template>
      <template #list-footer>
        LIST FOOTER
      </template>
    </vue3-simple-typeahead>

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


<style lang="scss">

.simple-typeahead-list-item {
  padding: .5rem;

  h6 {
    margin-bottom: 0;
  }
  strong {
    color: red;
  }
}
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