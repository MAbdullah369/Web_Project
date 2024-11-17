import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div><footer class="footer">
    <div class="footer-top">
      <div class="footer-column">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">AirCover</a></li>
          <li><a href="#">Anti-discrimination</a></li>
          <li><a href="#">Disability support</a></li>
          <li><a href="#">Cancellation options</a></li>
          <li><a href="#">Report neighborhood concern</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Hosting</h4>
        <ul>
          <li><a href="#">Airbnb your home</a></li>
          <li><a href="#">AirCover for Hosts</a></li>
          <li><a href="#">Hosting resources</a></li>
          <li><a href="#">Community forum</a></li>
          <li><a href="#">Hosting responsibly</a></li>
          <li><a href="#">Airbnb-friendly apartments</a></li>
          <li><a href="#">Join a free Hosting class</a></li>
          <li><a href="#">Find a co‑host</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Airbnb</h4>
        <ul>
          <li><a href="#">Newsroom</a></li>
          <li><a href="#">New features</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Gift cards</a></li>
          <li><a href="#">Airbnb.org emergency stays</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 Airbnb, Inc. · <a href="#">Terms</a> · <a href="#">Sitemap</a> · <a href="#">Privacy</a> · <a href="#">Your Privacy Choices</a></p>
      <div class="footer-icons">
        <span><a href="#">English (US)</a></span>
        <span><a href="#">$ USD</a></span>
        <span><a href="https://www.facebook.com/airbnb" target='blank'><i class="bi bi-facebook"></i></a></span>
        <span><a href="https://x.com/airbnb" target="_blank"><i class="bi bi-twitter"></i></a></span>
        <span><a href="https://www.instagram.com/airbnb" target="_blank"><i class="bi bi-instagram"></i></a></span>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer