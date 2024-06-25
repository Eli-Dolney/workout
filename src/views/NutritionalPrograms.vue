<template>
    <div class="page">
      <div class="main-content">
        <h1>Nutritional Programs</h1>
        <p>Explore our nutritional programs tailored to help you achieve your fitness goals.</p>
        <div class="image-grid">
          <div class="image-item" v-for="(image, index) in images" :key="index">
            <img :src="image.src" :alt="image.alt">
            <div class="overlay">
              <p>{{ image.alt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const images = [
    { src: new URL('../assets/images/eisleymain.jpg', import.meta.url).href, alt: 'Nutrition Program 1' },
    { src: new URL('../assets/images/eisleymain.jpg', import.meta.url).href, alt: 'Nutrition Program 2' },
    { src: new URL('../assets/images/eisleymain.jpg', import.meta.url).href, alt: 'Nutrition Program 3' }
  ];
  </script>
  
  <style scoped>
  .page {
    text-align: center;
  }
  
  .main-content {
    padding: 2rem;
  }
  
  .image-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  
  .image-item {
    position: relative;
    flex: 1 1 300px;
    max-width: 300px;
    transition: transform 0.3s;
  }
  
  .image-item img {
    width: 100%;
    border-radius: 8px;
  }
  
  .image-item:hover {
    transform: scale(1.05);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    border-radius: 8px;
    transition: opacity 0.3s;
  }
  
  .image-item:hover .overlay {
    opacity: 1;
  }
  </style>
  