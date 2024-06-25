<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h2>Stay Updated</h2>
          <p>Sign up to be the first to find out when we add new programs, apparel, and more. We respect your privacy and will never share your information with any third-party vendors.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Email Address" required>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div class="footer-section">
          <h2>Support</h2>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div class="footer-section">
          <h2>Contact</h2>
          <p>JACKED@gmail.com</p>
        </div>
        <div class="footer-section">
          <h2>Eisley Fit</h2>
          <!-- Add any additional information or branding here -->
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  // You can add any necessary script setup here if needed
  </script>
  
  <style scoped>
  .footer {
    background-color: #000;
    color: #fff;
    padding: 2rem 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Add shadow */
    border-top: 2px solid #ff0000; /* Add a red top border */
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section {
    flex: 1;
    min-width: 200px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }
  
  .footer-section h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .footer-section p, .footer-section a {
    color: #fff;
    margin-bottom: 0.5rem;
  }
  
  .footer-section a:hover {
    text-decoration: underline;
  }
  
  .newsletter-form {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align items in a row */
  }
  
  .newsletter-form input {
    padding: 0.5rem;
    margin-right: 0.5rem;
    border: none;
    border-radius: 4px;
    flex: 1;
  }
  
  .newsletter-form button {
    padding: 0.5rem 1rem;
    background-color: #fff;
    color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .newsletter-form button:hover {
    background-color: #ff0000;
    color: #fff;
  }
  </style>
  