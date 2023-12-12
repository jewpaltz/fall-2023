<script setup lang="ts">
import { type ShoppingCartItem, addToCart, getCart, removeFromCart, total, count } from "@/model/shoppingCart";

const cart = getCart();

</script>

<template>
  <div class="cart">
    <h1 class="subtitle">
      Cart: {{ count }} items, total: ${{ total }}
    </h1>

    <div class="cart-items">
      <div v-for="item in cart" :key="item.product.id" class="item">
        <img :src="item.product.thumbnail" :alt="item.product.title" />
        <div class="item-details">
          <h2 class="title is-5">{{ item.product.title }}</h2>
          <p class="subtitle is-6">
            <select v-model="item.quantity">
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
            x $ {{ item.product.price }}
            = ${{ item.product.price * item.quantity }}
            <button class="button is-danger is-small" @click="removeFromCart(item.product)">
              <div class="icon">
                <i class="fas fa-trash"></i>
              </div>
            </button>
          </p>

          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  padding: 1rem;
  overflow-y: scroll;
}

.cart-items {
  display: flex;
  flex-direction: column;

}
.item {
  display: flex;
  flex-direction: row;
  margin: .5rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  box-shadow: 0 0 1rem #0004;
  overflow: hidden;
}

.item img {
  width: 100px;
  margin-right: .5rem;
}
</style>