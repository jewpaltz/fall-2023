<script setup lang="ts">
import { getProducts, searchProducts, type Product } from '@/model/products';
import { addToCart } from '@/model/shoppingCart';
import { ref } from 'vue'

const products = ref([] as Product[])

getProducts().then((data) => {
  products.value = data
})

const isFetching = ref(false);
const page = ref(1);
const totalPages = ref(1);

const data = ref<Product[]>([]);
const selected = ref<Product | null>(null);
const name = ref("");

async function getAsyncData(_name: string) {
    if (name.value !== _name) {
        name.value = _name;
        data.value = [];
        page.value = 1;
        totalPages.value = 1;
    }

    // String cleared
    if (!_name.length) {
        data.value = [];
        page.value = 1;
        totalPages.value = 1;
        return;
    }

    // Reached last page
    if (page.value > totalPages.value) {
        return;
    }

    isFetching.value = true;
    try {
        const _data = await searchProducts(_name, page.value);

        data.value = [...data.value, ..._data];
        page.value += 1;
        totalPages.value = 1//_data.total_pages;
    } catch (err) {
        console.error(err);
    } finally {
        isFetching.value = false;
    }
}

function getMoreAsyncData() {
    getAsyncData(name.value);
}

</script>

<template>
  <div>
    <h1 class="title">
      Product List
    </h1>

    <section>
      <o-autocomplete
          :data="data"
          expanded
          placeholder="e.g. Perfume"
          :loading="isFetching"
          :debounce="500"
          @input="getAsyncData"
          
          @select="(option: Product) => (selected = option)"
          >
          <template #default="props">
              <div class="media">
                  <div class="media-left">
                      <img
                          width="32"
                          :src="props.option.thumbnail" />
                  </div>
                  <div class="media-content">
                      {{ props.option.title }}
                      <br>
                      {{ props.option.description  }}
                  </div>
              </div>
          </template>
          <template v-if="page > totalPages" #footer>
              <span class="ex-text-grey">
                  Thats it! No more products found.
              </span>
          </template>
      </o-autocomplete>
      <p><b>Selected:</b> {{ selected }}</p>
  </section>


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