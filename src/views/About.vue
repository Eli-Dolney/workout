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
        Join me on this journey to a healthier, stronger, and happier you. Let's achieve greatness together
      </p>
    </div>
    <div class="about-image">
      <img :src="imageSrc" alt="Eisley">
    </div>
  </div>
</template>

<script setup lang="ts">
const imageSrc = new URL('../assets/images/jacked.jpg', import.meta.url).href;
</script>

<style scoped>
.about-container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 2rem auto;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.about-text {
  flex: 1;
  padding: 2rem;
}

.about-text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #007bff;
}

.about-text p {
  font-size: 1.2rem;
  color: #666;
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
}

.about-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
