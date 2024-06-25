<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav-left">
          <router-link to="/" class="brand">EisleyFit</router-link>
        </div>
        <div class="nav-center">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Me</router-link></li>
            <li><router-link to="/coaching">Coaching</router-link></li>
            <li><router-link to="/store">Store</router-link></li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <SocialMediaSidebar />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import SocialMediaSidebar from './components/SocialMediaSidebar.vue';
import Footer from './views/Footer.vue'; 
</script>

<style scoped>
/* Basic Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  width: 100%;
  height: 100%;
  font-family: 'Arial', sans-serif;
  background-color: #000; /* Full black background */
  color: #fff;
}

/* Header Styling */
header {
  background-color: #000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left {
  flex: 1;
}

.nav-center {
  flex: 2;
  display: flex;
  justify-content: center;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
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
  color: #fff;
  font-weight: bold;
}

nav ul li a:hover {
  color: #ff0000;
}

/* Main Content Styling */
main {
  min-height: 100vh; /* Ensure main content takes full viewport height */
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }

  .nav-left, .nav-center {
    flex: none;
  }

  .nav-center {
    justify-content: flex-start;
  }

  nav ul {
    flex-direction: column;
    align-items: flex-start;
  }

  nav ul li {
    margin: 0.5rem 0;
  }
}
</style>
