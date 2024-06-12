<template>
  <div class="hero">
    <div class="hero-content">
      <h1>EISLEY</h1>
      <p class="subtitle">Get Roided out with me</p>
      <p class="description">
        I got the best suppliers for sarms, tren and fairlife use code eisleyfit for 40% off at your local plug lol
      </p>
      <div class="hero-buttons">
        <button class="btn-primary">Learn More</button>
        <button class="btn-secondary">Watch How It Works</button>
      </div>
    </div>
    <div class="hero-image">
      <img :src="imageUrl" alt="EISLEY">
    </div>
  </div>
</template>

<script setup lang="ts">
import imageUrl from '../assets/images/jacked.jpg';
</script>

<style scoped>
.hero {
  background: linear-gradient(to right, #f5f5f5, #fff);
  padding: 4rem 2rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.hero-content {
  max-width: 800px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
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

.hero-image {
  max-width: 400px;
  margin-left: 2rem;
}

.hero-image img {
  width: 100%;
  border-radius: 8px;
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

/* Media Queries */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-image {
    margin-left: 0;
    margin-top: 2rem;
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
