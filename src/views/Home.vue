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

    <!-- Multi-Container Carousel Section -->
    <div class="carousel-section">
      <div class="carousel-container">
        <div class="carousel-content">
          <img :src="trainingImages[currentTrainingSlide]" alt="Training Programs" />
          <p>TRAINING PROGRAMS</p>
        </div>
      </div>
      <div class="carousel-container">
        <div class="carousel-content">
          <img :src="apparelImages[currentApparelSlide]" alt="TSB Apparel" />
          <p>My APPAREL</p>
        </div>
      </div>
      <div class="carousel-container">
        <div class="carousel-content">
          <img :src="coachingImages[currentCoachingSlide]" alt="Online Coaching" />
          <p>ONLINE COACHING</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Image arrays for each section
const trainingImages = ref([
  new URL('../assets/images/eisley1.jpg', import.meta.url).href,
  new URL('../assets/images/eisley2.jpg', import.meta.url).href,
  new URL('../assets/images/eisley3.jpg', import.meta.url).href,
]);

const apparelImages = ref([
  new URL('../assets/images/eisley1.jpg', import.meta.url).href,
  new URL('../assets/images/eisley2.jpg', import.meta.url).href,
  new URL('../assets/images/eisley3.jpg', import.meta.url).href,
]);

const coachingImages = ref([
  new URL('../assets/images/eisley1.jpg', import.meta.url).href,
  new URL('../assets/images/eisley2.jpg', import.meta.url).href,
  new URL('../assets/images/eisley3.jpg', import.meta.url).href,
]);

// Slide indices for each container
const currentTrainingSlide = ref(0);
const currentApparelSlide = ref(0);
const currentCoachingSlide = ref(0);

// Set intervals for each container to cycle through images
let trainingInterval: ReturnType<typeof setInterval> | null = null;
let apparelInterval: ReturnType<typeof setInterval> | null = null;
let coachingInterval: ReturnType<typeof setInterval> | null = null;

const startCarousel = () => {
  trainingInterval = setInterval(() => {
    currentTrainingSlide.value = (currentTrainingSlide.value + 1) % trainingImages.value.length;
  }, 10000);

  apparelInterval = setInterval(() => {
    currentApparelSlide.value = (currentApparelSlide.value + 1) % apparelImages.value.length;
  }, 10000);

  coachingInterval = setInterval(() => {
    currentCoachingSlide.value = (currentCoachingSlide.value + 1) % coachingImages.value.length;
  }, 10000);
};

onMounted(startCarousel);

onBeforeUnmount(() => {
  if (trainingInterval) clearInterval(trainingInterval);
  if (apparelInterval) clearInterval(apparelInterval);
  if (coachingInterval) clearInterval(coachingInterval);
});
</script>

<style scoped>
/* Hero Section */
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
  padding: 0.75rem 1.5rem;
}

.btn-secondary {
  background-color: #fff;
  color: #007bff;
  padding: 0.75rem 1.5rem;
}

/* Carousel Section */
.carousel-section {
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
  background-color: #f5f5f5;
}

.carousel-container {
  width: 30%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  text-align: center;
}

.carousel-content img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.carousel-content p {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  color: #fff;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  font-size: 1.2rem;
}
</style>
