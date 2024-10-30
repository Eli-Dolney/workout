<!-- src/views/CartPage.vue -->
<template>
    <div class="cart-page">
      <h1>Your Cart</h1>
      <div v-if="cartItems.length > 0" class="cart-content">
        <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
          <img :src="item.image" alt="Product Image" class="cart-item-image" />
          <div class="cart-item-details">
            <h3>{{ item.name }}</h3>
            <p class="price">${{ item.price }}</p>
            <div class="quantity-control">
              <label>Quantity</label>
              <input
                type="number"
                v-model="item.quantity"
                min="1"
                @change="updateQuantity(item)"
              />
            </div>
            <button @click="removeFromCart(item.id)" class="remove-btn">
              Remove
            </button>
          </div>
        </div>
        <div class="cart-total">
          <h2>Total: ${{ cartTotal }}</h2>
          <button @click="proceedToCheckout" class="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <p v-else class="empty-cart-message">Your cart is empty.</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useCartStore } from '@/stores/cart';
  
  const cartStore = useCartStore();
  
  const cartItems = computed(() => cartStore.items);
  const cartTotal = computed(() => cartStore.cartTotal);
  
  const removeFromCart = (productId) => {
    cartStore.removeFromCart(productId);
  };
  
  const updateQuantity = (item) => {
    if (item.quantity < 1) item.quantity = 1;
    cartStore.addToCart(item); // Update quantity in store
  };
  
  const proceedToCheckout = () => {
    alert("Checkout feature coming soon!");
  };
  </script>
  
  <style scoped>
  .cart-page {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 2.2rem;
    color: #333;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .cart-content {
    padding: 1rem;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .cart-item-image {
    width: 80px;
    height: 80px;
    margin-right: 1.5rem;
    border-radius: 8px;
    object-fit: cover;
  }
  
  .cart-item-details {
    flex: 1;
    text-align: left;
  }
  
  .cart-item-details h3 {
    font-size: 1.2rem;
    color: #333;
    font-weight: 500;
    margin: 0;
  }
  
  .price {
    color: #555;
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }
  
  .quantity-control {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .quantity-control label {
    font-size: 0.9rem;
    color: #777;
  }
  
  .quantity-control input {
    width: 60px;
    padding: 0.25rem;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .remove-btn {
    background-color: #e74c3c;
    color: #fff;
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 0.5rem;
  }
  
  .remove-btn:hover {
    background-color: #c0392b;
  }
  
  .cart-total {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: #333;
  }
  
  .checkout-btn {
    background-color: #3498db;
    color: #fff;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1rem;
  }
  
  .checkout-btn:hover {
    background-color: #2980b9;
  }
  
  .empty-cart-message {
    font-size: 1.2rem;
    color: #888;
    padding: 2rem 0;
  }
  </style>
  