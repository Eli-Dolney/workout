<template>
    <div class="social-media-sidebar">
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  // No script needed for this component
  </script>
  
  <style scoped>
  .social-media-sidebar {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: #007bff;
    border-radius: 8px 0 0 8px;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .social-media-sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .social-media-sidebar li {
    margin: 0;
  }
  
  .social-media-sidebar a {
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .social-media-sidebar a:hover {
    color: #0056b3;
  }
  </style>
  