import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>Welcome to our real estate platform! We are dedicated to helping you find your dream home or investment property. Our team is committed to providing exceptional service and support throughout your real estate journey.</p>
      <p>Our team of real estate professionals is here to help you find your dream home or investment property. We are committed to providing exceptional service and support.</p>
      <p> we ofeer services such as:
        <ol>
          <li>Home buying</li>
          <li>Home selling</li>
          <li>BnB houses</li>
        </ol>
      </p> 
      <p>Connect with us on social media to stay updated on the latest listings, market trends, and tips for buyers and sellers.</p>
      <div className="social-media">
        <a href="https://www.instagram.com/G-2 RealEstate" target="_blank" rel="noopener noreferrer">
          <img src="https://img.freepik.com/premium-vector/instagram-icon-paper-cut-style-social-media-icons_505135-235.jpg" alt="Instagram" />
        </a>
        <a href="https://twitter.com/G-2 RealEstate" target="_blank" rel="noopener noreferrer">
          <img src="https://banner2.cleanpng.com/20180624/las/kisspng-social-media-computer-icons-instagram-twitter-blog-5b2ff3390dbdc9.3076741315298691130563.jpg" alt="Twitter" />
        </a>
        <a href="https://www.facebook.com/G-2 RealEstate" target="_blank" rel="noopener noreferrer">
          <img src="https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-3ss3dgti.png" alt="Facebook" />
        </a>
      </div>
      <p>For inquiries or assistance, feel free to email us at <a href="mailto:info@yourrealestate.com">info@yourrealestate.com</a>.</p>
    </div>
  );
};

export default About;
