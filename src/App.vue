<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Me</router-link></li>
          <li><router-link to="/workout-plans">Workout Plans</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <button class="btn-consultation">Book Consultation</button>
      </nav>
    </header>
    <router-view></router-view>
    <SocialMediaSidebar />
  </div>
</template>

<script setup lang="ts">
import SocialMediaSidebar from './components/SocialMediaSidebar.vue';
</script>

<style scoped>
/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body Styling */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

/* Header Styling */
header {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-right: 1rem;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav ul li a:hover {
  color: #007bff;
}

/* Button Styling */
.btn-consultation {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-consultation:hover {
  background-color: #0056b3;
}

/* Main Content Styling */
#app {
  text-align: center;
  padding: 2rem;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin: 0.5rem 0;
  }

  .btn-consultation {
    margin-top: 1rem;
  }
}
</style>
