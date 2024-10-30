<template>
  <div class="product-detail">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="Product Image" class="product-image" />
    <p class="price">${{ product.price }}</p>
    <p class="description">{{ product.description }}</p>
    
    <!-- Quantity Input -->
    <div class="quantity-wrapper">
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" v-model.number="quantity" min="1" />
    </div>

    <!-- Add to Cart Button -->
    <button @click="addToCart" class="add-to-cart">Add to Cart</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { products } from '@/data/products';
import { useCartStore } from '@/stores/cart';

// Access the current route and initialize the cart store
const route = useRoute();
const cartStore = useCartStore();

// Track the product quantity
const quantity = ref(1);

// Find the product details dynamically based on the route parameter
const product = computed(() => products.find(p => p.id === route.params.productId));

// Function to add the product to the cart store
const addToCart = () => {
  if (product.value && quantity.value > 0) {
    cartStore.addToCart({ ...product.value, quantity: quantity.value });
    alert(`${product.value.name} has been added to your cart!`);
  } else {
    alert("Please enter a valid quantity.");
  }
};
</script>

<style scoped>
.product-detail {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.product-image {
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.5rem;
  color: #ff0000;
  margin: 0.5rem 0;
}

.description {
  color: #333;
  margin-bottom: 1rem;
}

.quantity-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.quantity-wrapper label {
  font-weight: bold;
}

.quantity-wrapper input {
  width: 60px;
  padding: 0.25rem;
  font-size: 1rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-to-cart {
  background-color: #ff0000;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.add-to-cart:hover {
  background-color: #e60000;
}
</style>
