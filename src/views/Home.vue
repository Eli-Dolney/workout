<template>
  <div>
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>EISLEY</h1>
        <p class="subtitle">Get Roided out with me</p>
        <p class="description">
          I got the best suppliers for sarms, tren, and fairlife. Use code "eisleyfit" for 40% off at your local plug lol
        </p>
        <div class="hero-buttons">
          <button class="btn-primary">Learn More</button>
          <button class="btn-secondary">Watch How It Works</button>
        </div>
      </div>
    </div>

    <!-- Carousel Section -->
    <div class="carousel-section">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentSlide * 100}%)`, '--carousel-image-count': images.length }">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Carousel Image" />
        </div>
      </div>
      <!-- Dots to navigate through images -->
      <div class="carousel-dots">
        <span v-for="(images, index) in images" :key="index" class="dot" :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Image array for the carousel
const images = ref([
  new URL('../assets/images/eisley1.JPG', import.meta.url).href,
  new URL('../assets/images/eisley2.JPG', import.meta.url).href,
  new URL('../assets/images/eisley3.JPG', import.meta.url).href,
]);

// Reactive state for current slide
const currentSlide = ref(0);
let carouselInterval: ReturnType<typeof setInterval> | null = null;

// Function to change the slide automatically every 10 seconds
const startCarousel = () => {
  carouselInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % images.value.length;
  }, 10000); // 10 seconds
};

// Stop the carousel when component is destroyed
onBeforeUnmount(() => {
  if (carouselInterval) clearInterval(carouselInterval);
});

// Start the carousel when the component is mounted
onMounted(() => {
  startCarousel();
});

// Manually go to a specific slide
const goToSlide = (index: number) => {
  currentSlide.value = index;
  if (carouselInterval) clearInterval(carouselInterval); // Restart the timer
  startCarousel();
};
</script>


<style scoped>
.hero {
  background: url('../assets/images/eisleymain.jpg') no-repeat center center;
  background-size: cover;
  padding: 4rem 2rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
}

.hero-content {
  position: relative;
  max-width: 1000px;
  z-index: 1;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: red;
}

.hero .subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero .description {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #666;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #fff;
  color: #007bff;
  border: 1px solid #007bff;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn-secondary:hover {
  background-color: #007bff;
  color: #fff;
}

/* Carousel Section */
.carousel-section {
  width: 100%;
  padding: 2rem 0;
  background-color: #f5f5f5; /* Light background to separate from hero */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: calc(100% * var(--carousel-image-count)); /* Dynamic width based on image count */
  max-width: 1200px;
  overflow: hidden;
}

.carousel-item {
  width: 100%;
  flex-shrink: 0;
}

.carousel-item img {
  width: 100%;
  height: 400px; /* Adjust this height as needed */
  object-fit: cover;
}

/* Dots below the carousel */
.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.dot {
  height: 12px;
  width: 12px;
  margin: 0 4px;
  background-color: #ccc;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: #007bff;
}

/* Media Queries */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary, .btn-secondary {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>
