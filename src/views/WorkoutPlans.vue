<template>
  <div class="workout-plans">
    <header class="header">
      <div class="logo">Eisley-Fit</div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/store">Store</router-link></li>
          <li><router-link to="/coaching">Coaching</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>
    <div class="main-content">
      <h1>Workout Plans</h1>
      <div class="sub-nav">
        <router-link to="/workout-plans/eisleys-apparel">Eisleys Apparel</router-link>
        <router-link to="/workout-plans/nutritional-programs">Nutritional Programs</router-link>
        <router-link to="/workout-plans/training-programs">Training Programs</router-link>
      </div>
      <div v-if="!$route.name || $route.name === 'WorkoutPlans'" class="info-section">
        <div class="info-block">
          <h2>Eisleys Apparel</h2>
          <p>Discover our range of high-quality apparel designed to support your fitness journey. From breathable workout shirts to durable leggings, our apparel is crafted to help you perform your best.</p>
        </div>
        <div class="info-block">
          <h2>Nutritional Programs</h2>
          <p>Explore our nutritional programs tailored to help you achieve your fitness goals. Whether you're looking to build muscle, lose fat, or maintain a healthy lifestyle, our meal plans are designed to fuel your body the right way.</p>
        </div>
        <div class="info-block">
          <h2>Training Programs</h2>
          <p>Check out our training programs designed to enhance your fitness and strength. With detailed workout plans, instructional videos, and progress tracking, our programs are suitable for all fitness levels.</p>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

/* Header Styling */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-right: 1.5rem;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #007bff;
}

/* Main Content Styling */
.main-content {
  text-align: center;
  padding: 2rem;
}

.main-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #007bff;
}

.sub-nav {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.sub-nav a {
  text-decoration: none;
  color: #0056b3;
  font-weight: bold;
  transition: color 0.3s, border-bottom 0.3s;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid transparent;
}

.sub-nav a:hover {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}

/* Info Section Styling */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-block {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.info-block h2 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #007bff;
}

.info-block p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}
</style>
