<template>
  <div class="about-container">
    <div class="about-text">
      <h1>About Me</h1>
      <p>
        Hi, I'm Eisley, a dedicated fitness enthusiast with over 5 years of experience in training and studying the human body and its muscles. My passion for fitness began at a young age, and since then, I've been committed to transforming my physique and helping others achieve their fitness goals.
      </p>
      <p>
        Throughout my journey, I've had the privilege of training alongside some of the industry's top professionals and learning from the best. I've also mastered the art of cooking, developing delicious and nutritious recipes that support muscle growth and overall health.
      </p>
      <p>
        My approach to fitness is holistic, focusing not just on physical training but also on mental well-being and nutrition. Whether you're an athlete looking to enhance your performance or someone new to fitness, I'm here to guide you every step of the way.
      </p>
      <p>
        Join me on this journey to a healthier, stronger, and happier you. Let's achieve greatness together.
      </p>
    </div>
    <div class="about-image">
      <img :src="imageSrc" alt="Eisley">
    </div>
  </div>
</template>

<script setup lang="ts">
const imageSrc = new URL('../assets/images/front.jpg', import.meta.url).href;
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
  background-color: #333; /* Dark background */
  color: #fff; /* White text */
}

/* Full-width container */
.about-container {
  display: flex;
  align-items: stretch; /* Ensure children are the same height */
  justify-content: center;
  width: 100%;
  height: 100vh; /* Full viewport height */
  margin: 0 auto;
  background-color: #000; /* Match the black theme */
}

.about-text {
  flex: 1;
  padding: 2rem;
}

.about-text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ff0000; /* Match the red theme for headings */
}

.about-text p {
  font-size: 1.2rem;
  color: #ccc; /* Light grey for paragraphs */
  margin-bottom: 1rem;
  line-height: 1.6;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.about-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Ensure the image doesn't overflow */
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>
