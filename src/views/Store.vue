<template>
  <div class="store">
    <div class="main-content">
      <h1 class="store-title">Store</h1>

      <!-- Tab Navigation with Buttons -->
      <div class="tab-nav">
        <button :class="{ active: activeTab === 'top-sellers' }" @click="activeTab = 'top-sellers'" class="tab-button">
          Top Sellers
        </button>
        <button :class="{ active: activeTab === 'eisleys-apparel' }" @click="activeTab = 'eisleys-apparel'" class="tab-button">
          Eisleys Apparel
        </button>
        <button :class="{ active: activeTab === 'nutritional-programs' }" @click="activeTab = 'nutritional-programs'" class="tab-button">
          Nutritional Programs
        </button>
        <button :class="{ active: activeTab === 'training-programs' }" @click="activeTab = 'training-programs'" class="tab-button">
          Training Programs
        </button>
      </div>

      <!-- Top Sellers Section -->
      <div v-if="activeTab === 'top-sellers'" class="top-sellers">
        <div class="top-sellers-grid">
          <router-link 
            v-for="(product, index) in topSellers" 
            :key="index" 
            :to="{ name: 'ProductDetail', params: { productId: product.id } }"
            class="product-card"
          >
            <img :src="product.src" :alt="product.alt" class="product-image">
            <h3>{{ product.name }}</h3>
            <p>${{ product.price }}</p>
          </router-link>
        </div>
      </div>

      <!-- Other Sections (Apparel, Nutrition, Training) -->
      <div v-if="activeTab === 'eisleys-apparel'" class="section-content">
        <img src="../assets/images/eisley1.jpg" alt="Eisleys Apparel" class="section-image">
        <div class="section-description">
          <h2>Eisleys Apparel</h2>
          <p>Discover our high-quality apparel designed for performance and comfort.</p>
          <router-link to="/store/eisleys-apparel" class="view-more-link">View More</router-link>
        </div>
      </div>

      <div v-if="activeTab === 'nutritional-programs'" class="section-content">
        <img src="../assets/images/eisley1.jpg" alt="Nutritional Programs" class="section-image">
        <div class="section-description">
          <h2>Nutritional Programs</h2>
          <p>Explore our nutritional programs to support your fitness and health goals.</p>
          <router-link to="/store/nutritional-programs" class="view-more-link">View More</router-link>
        </div>
      </div>

      <div v-if="activeTab === 'training-programs'" class="section-content">
        <img src="../assets/images/eisley1.jpg" alt="Training Programs" class="section-image">
        <div class="section-description">
          <h2>Training Programs</h2>
          <p>Check out our detailed training programs for all fitness levels.</p>
          <router-link to="/store/training-programs" class="view-more-link">View More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('top-sellers'); // Default tab is Top Sellers

const topSellers = [
  { id: 'product1', src: new URL('../assets/images/eisley1.jpg', import.meta.url).href, alt: 'Top Seller 1', name: 'Product 1', price: 49.99 },
  { id: 'product2', src: new URL('../assets/images/eisley2.jpg', import.meta.url).href, alt: 'Top Seller 2', name: 'Product 2', price: 29.99 },
  { id: 'product3', src: new URL('../assets/images/eisley3.jpg', import.meta.url).href, alt: 'Top Seller 3', name: 'Product 3', price: 39.99 }
];
</script>

<style scoped>
.store {
  width: 100%;
  padding: 1rem;
  color: #fff;
  background-color: #000;
  text-align: center;
  position: relative;
  padding-top: 0; /* Remove excess top padding */
}

/* Store Title */
.store-title {
  font-size: 3rem;
  color: #ff0000;
  margin: 0; /* Remove extra top margin */
  font-weight: bold;
}

/* Tab Navigation with Styled Buttons */
.tab-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.5rem 0; /* Reduced spacing */
  gap: 1rem;
}

.tab-button {
  background: #333;
  color: #ccc;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s, color 0.3s;
}

.tab-button:hover, .tab-button.active {
  color: #ff0000;
  font-weight: bold;
  box-shadow: 0px 0px 15px rgba(255, 0, 0, 0.6);
  transform: scale(1.1);
}

/* Top Sellers Grid */
.top-sellers-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1rem;
}

@media (min-width: 600px) {
  .top-sellers-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .top-sellers-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.product-card {
  background-color: #333;
  padding: 1rem;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  transition: transform 0.3s;
  border: 1px solid #444;
  max-width: 300px;
  margin: 0 auto;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

/* Section Content */
.section-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #333;
  border-radius: 8px;
  border: 1px solid #444;
  max-width: 500px;
}

.section-image {
  width: 100%;
  height: 300px;
  border-radius: 8px;
  margin-bottom: 1rem;
  object-fit: cover;
}

.section-description h2 {
  font-size: 1.5rem;
  color: #ff0000;
  margin-bottom: 0.5rem;
}

.view-more-link {
  color: #ff0000;
  text-decoration: none;
  font-weight: bold;
  margin-top: 0.5rem;
}

.view-more-link:hover {
  text-decoration: underline;
}

/* Mobile Adjustments */
@media (max-width: 600px) {
  .store-title {
    font-size: 2rem;
  }

  .tab-nav {
    flex-direction: column;
  }

  .tab-button {
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }

  .top-sellers-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .product-card {
    max-width: 100%;
  }
}
</style>
