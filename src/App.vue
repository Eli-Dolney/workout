<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav-left">
          <router-link to="/" class="brand">
            <span class="brand-text">EisleyFit</span>
            <i class="fa-solid fa-home brand-icon"></i>
          </router-link>
        </div>

        <!-- Desktop Navigation Links -->
        <div class="nav-center-desktop">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Me</router-link></li>
            <li><router-link to="/coaching">Coaching</router-link></li>
            <li><router-link to="/store">Store</router-link></li>
          </ul>
        </div>

        <!-- Hamburger Icon for Mobile -->
        <div class="hamburger" @click="toggleMenu">
          <div :class="menuOpen ? 'bar open' : 'bar'"></div>
          <div :class="menuOpen ? 'bar open' : 'bar'"></div>
          <div :class="menuOpen ? 'bar open' : 'bar'"></div>
        </div>

        <!-- Fullscreen Navigation Menu Overlay for Mobile -->
        <div class="nav-overlay" :class="{ show: menuOpen }">
          <div class="nav-menu">
            <ul>
              <li><router-link to="/" @click="toggleMenu">Home</router-link></li>
              <li><router-link to="/about" @click="toggleMenu">About Me</router-link></li>
              <li><router-link to="/coaching" @click="toggleMenu">Coaching</router-link></li>
              <li><router-link to="/store" @click="toggleMenu">Store</router-link></li>
            </ul>
          </div>

          <!-- Social Media Icons at the Bottom -->
          <div class="social-icons">
            <a href="#" aria-label="Facebook"><i class="fa fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fa fa-linkedin"></i></a>
          </div>
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
import { ref } from 'vue';
import SocialMediaSidebar from './components/SocialMediaSidebar.vue';
import Footer from './views/Footer.vue';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
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
  background-color: #000;
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
  position: relative;
}

/* Brand/Logo Styling */
.brand {
  font-size: 2rem;
  font-weight: bold;
  color: #ff0000;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  transition: color 0.3s ease;
}

.brand-text {
  transition: opacity 0.3s ease;
}

.brand-icon {
  display: none;
  font-size: 2rem;
  color: #ff0000;
  position: absolute;
  left: 0;
  transition: opacity 0.3s ease;
}

.brand:hover .brand-text {
  opacity: 0;
}

.brand:hover .brand-icon {
  display: block;
  opacity: 1;
}

/* Desktop Navigation */
.nav-center-desktop {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.nav-center-desktop ul {
  display: flex;
  list-style: none;
}

.nav-center-desktop ul li {
  margin-right: 2rem;
}

.nav-center-desktop ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s;
}

.nav-center-desktop ul li a:hover {
  color: #ff0000;
}

/* Hamburger Styling for Mobile */
.hamburger {
  display: none; /* Hide on desktop, show on mobile */
  flex-direction: column;
  justify-content: space-between;
  height: 1.5rem;
  cursor: pointer;
  z-index: 1000;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

.hamburger .bar.open {
  background-color: #ff0000;
}

/* Fullscreen Overlay Menu for Mobile */
.nav-overlay {
  display: none; /* Initially hidden */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 999;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-overlay.show {
  display: flex;
}

.nav-menu ul {
  list-style: none;
  text-align: center;
}

.nav-menu ul li {
  margin-bottom: 2rem;
}

.nav-menu ul li a {
  font-size: 2rem;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.nav-menu ul li a:hover {
  color: #ff0000;
}

/* Social Icons at the bottom of the screen */
.social-icons {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: space-around;
  width: 50%;
}

.social-icons a {
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
}

.social-icons a:hover {
  color: #ff0000;
}

/* Main Content Styling */
main {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .nav-center-desktop {
    display: none; /* Hide desktop navbar on mobile */
  }

  .hamburger {
    display: flex; /* Show hamburger on mobile */
  }
}

/* Desktop Navigation */
@media (min-width: 769px) {
  .nav-overlay {
    display: none; /* Always hide the overlay on desktop */
  }

  .hamburger {
    display: none; /* Hide the hamburger on desktop */
  }
}
</style>
