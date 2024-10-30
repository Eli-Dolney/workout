<template>
  <div class="page">
    <div class="main-content">
      <h1 class="page-title">Eisleys Apparel</h1>
      <p class="page-subtitle">Discover our range of high-quality apparel designed to support your fitness journey.</p>
      <div class="image-grid">
        <router-link
          v-for="(image, index) in images"
          :key="index"
          :to="{ name: 'ProductDetail', params: { productId: image.id } }"
          class="image-item"
        >
          <img :src="image.src" :alt="image.alt">
          <div class="overlay">
            <p>{{ image.alt }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  { id: 'nutrition1', src: new URL('../assets/images/eisleymain.jpg', import.meta.url).href, alt: 'Apparel Item 1' },
  { id: 'nutrition2', src: new URL('../assets/images/eisleymain.jpg', import.meta.url).href, alt: 'Apparel Item 2' },
  { id: 'nutrition3', src: new URL('../assets/images/eisleymain.jpg', import.meta.url).href, alt: 'Apparel Item 3' }
];
</script>

<style scoped>
.page {
  text-align: center;
  color: #fff;
  background-color: #000;
  padding: 2rem 1rem;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #ff0000;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 2rem;
}

/* Image Grid Styling */
.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.image-item {
  position: relative;
  flex: 1 1 250px;
  max-width: 250px;
  transition: transform 0.3s;
  border-radius: 8px;
  overflow: hidden;
  background-color: #333;
  border: 1px solid #444;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.image-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: opacity 0.3s;
}

.image-item:hover {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.image-item:hover .overlay {
  opacity: 1;
}
</style>
