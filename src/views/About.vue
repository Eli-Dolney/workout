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
/* Mobile-first approach */
.about-container {
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem;
  height: auto;
}

.about-image img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.about-text h1 {
  font-size: 2rem;
}

.about-text p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

/* For larger screens (tablets, desktops) */
@media (min-width: 768px) {
  .about-container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 90vh;
    padding: 3rem 5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-text {
    flex: 1.5;
    padding-right: 2rem;
    max-width: 60%; /* Text area width on larger screens */
  }

  .about-text h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  .about-text p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .about-image {
    flex: 1;
    display: flex;
    justify-content: center;
    max-width: 40%; /* Image area width on larger screens */
  }

  .about-image img {
    width: 100%;
    height: auto;
    max-width: 450px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* Adding a subtle shadow */
  }
}

/* Footer styling (optional for sticking it at the bottom) */
footer {
  width: 100%;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
}

</style>
