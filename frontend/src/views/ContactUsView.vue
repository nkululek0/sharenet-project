<template>
  <div class="main-content-container contact-us">
    <div class="component-heading-container">
      <h1 class="main-header-heading">Contact Us</h1>
    </div>
    <div class="main-contact-us-content">
      <h2 class="heading">
        <span class="question">Assistance? </span>
        <span class="answer">Give Us A Shout!</span>
      </h2>
      <div class="content">
        <div class="details">
          <div class="contact-details">
            <h3>Get in touch</h3>
            <div class="contact-details-info">
              <p>Call us on: <a href="tel:+27 (0)21 700 4800">+27 (0)21 700 4800</a></p>
              <p>Support: <a href="mailto:support@sharenet.co.za">support@sharenet.co.za</a></p>
            </div>
          </div>
          <div class="address-details">
            <h3>Address</h3>
            <div class="address-details-info">
              <p>
                <b>Head Office:</b>
              </p>
              <div class="address">
                <span class="street-address">301, 3rd Floor Imperial Terraces</span>
                <span class="office">Tyger Waterfront</span>
                <span class="town">Carl Cronje Drive</span>
                <span class="city">Bellville, Cape Town</span>
                <span class="postal-code">7530</span>
              </div>
            </div>
          </div>
          <div class="disclaimer">
            <h3>Additional Info</h3>
            <p>
              Contact our support centre and we'll get back to you as soon as possible.<br/>
              During business hours (Monday - Friday, 8am - 5pm), we will respond within 48 hours.
            </p>
          </div>
        </div>
        <div class="content-separator"></div>
        <div class="map-container">
          <h3>Find Us At</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6624.9899479446485!2d18.630108!3d-33.876904!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41e6218f7ab3%3A0xbdd802ca53b92d43!2sSharenet%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1748528605896!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="google-maps"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .component-heading-container {
    margin-bottom: 2.2rem;
    display: flex;
    justify-content: space-between;
  }

  .heading {
    margin-bottom: 1.5rem;
  }

  .heading .answer {
    font-style: italic;
    font-weight: normal;
  }

  .main-contact-us-content {
    text-align: left;
  }

  .main-contact-us-content .content {
    display: grid;
    grid-template-columns: 6fr 1fr 6fr;
  }

  .contact-details h3,
  .address-details h3,
  .map-container h3,
  .disclaimer h3 {
    width: max-content;
    margin-bottom: 0.5rem;
  }

  .contact-details h3::after,
  .address-details h3::after,
  .map-container h3::after,
  .disclaimer h3::after {
    content: "";
    width: 4.5rem;
    display: block;
    border: 1px solid #000;
    bottom: 2px;
    position: relative;
  }
  .address-details h3::after {
    width: 3.5rem;
  }

  .address-details-info {
    margin-bottom: 1.5rem;
  }

  .contact-details-info p {
    width: max-content;
  }

  .contact-details {
    margin-bottom: 1.5rem;
  }

  .main-contact-us-content .address span {
    display: block;
  }

  .content-separator {
    display: flex;
    justify-content: center;
  }

  .content-separator::after {
    content: "";
    display: inline-block;
    height: 10rem;
    border: 1px solid #000;
    top: 25%;
    position: relative;
  }

  iframe.google-maps {
    width: 100%;
    height: 350px;
  }

  .contact-details-info a {
    color: #000;
  }
</style>