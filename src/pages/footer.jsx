const Footer = () => {
  return (
    <footer class="main-footer">
      <div class="inner">
        <div class="logo-wrapper">
          <a href="index.html" class="logo">
            Influences Hub
          </a>
          <div class="copyright">&copy; 2023 Mahadi All rights reserved.</div>
        </div>

        <div class="links">
          <div class="group">
            <h4>Brands</h4>
            <a href="brands">Home</a>
            <a href="#">Pricing</a>
            <a href="brand-terms">Terms & Conditions</a>
            <a href="brand-contact">Contact Us</a>
            <a href="brand-faq">FAQ</a>
          </div>
          <div class="group">
            <h4>Creators</h4>
            <a href="creators">Home</a>
            <a href="creator-privacy">Privacy Policy</a>
            <a href="creator-terms">Terms & Conditions</a>
            <a href="creator-contact">Contact Us</a>
            <a href="creator-faq">FAQ</a>
          </div>
        </div>

        <div>
          <div class="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                class="icon"
                src="./images/all/icons/social/facebook-circle.svg"
                alt="Facebook"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                class="icon"
                src="./images/all/icons/social/instagram-circle.svg"
                alt="Instagram"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                class="icon"
                src="./images/all/icons/social/youtube-circle.svg"
                alt="YouTube"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                class="icon"
                src="./images/all/icons/social/twitter-circle.svg"
                alt="Twitter"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                class="icon"
                src="./images/all/icons/social/tiktok-circle.svg"
                alt="TikTok"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
