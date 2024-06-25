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
  </div>
</template>


<script setup lang="ts">

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
