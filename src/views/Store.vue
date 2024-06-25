<template>
  <div class="store">
    <div class="main-content">
      <h1>Store</h1>
      <div v-if="!$route.name || $route.name === 'Store'" class="info-section">
        <div class="info-block" @click="navigateTo('/store/eisleys-apparel')">
          <h2>Eisleys Apparel</h2>
          <p>Discover our range of high-quality apparel designed to support your fitness journey. From breathable workout shirts to durable leggings, our apparel is crafted to help you perform your best.</p>
        </div>
        <div class="info-block" @click="navigateTo('/store/nutritional-programs')">
          <h2>Nutritional Programs</h2>
          <p>Explore our nutritional programs tailored to help you achieve your fitness goals. Whether you're looking to build muscle, lose fat, or maintain a healthy lifestyle, our meal plans are designed to fuel your body the right way.</p>
        </div>
        <div class="info-block" @click="navigateTo('/store/training-programs')">
          <h2>Training Programs</h2>
          <p>Check out our training programs designed to enhance your fitness and strength. With detailed workout plans, instructional videos, and progress tracking, our programs are suitable for all fitness levels.</p>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<style scoped>
/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: 'Arial', sans-serif;
  background-color: #000; /* Dark background */
  color: #fff; /* White text */
}

/* Main Content Styling */
.store {
  width: 100%;
  min-height: 100vh; /* Ensure the container takes full viewport height */
  padding: 2rem;
  background-color: #000; /* Match the black theme */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-content {
  text-align: center;
}

.main-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ff0000; /* Red heading */
}

/* Info Section Styling */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-block {
  background-color: #333; /* Slightly lighter than the background */
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  color: #fff; /* White text for blocks */
}

.info-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}

.info-block h2 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #ff0000; /* Red heading for blocks */
}

.info-block p {
  font-size: 1rem;
  color: #ccc; /* Light grey text for paragraphs */
  line-height: 1.6;
}
</style>
