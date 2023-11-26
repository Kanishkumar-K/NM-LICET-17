import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <section>
        <div id="containerFooter">
          <div id="webFooter">
            <h3>online store</h3>
            <p>tablets</p>
            <p>Smartphones</p>
            <p>watches</p>
            <p>accessories</p>
          </div>

          <div id="webFooter">
            <h3>partners</h3>
            <p>SAMSUNG</p>
            <p>NOKIA</p>
            <p>IPHONE</p>
            <p>XIAOMI</p>
            <p>+ many more</p>
          </div>

          <div id="webFooter">
            <h3>address</h3>
            <p>building 101</p>
            <p>central avenue</p>
            <p>la - 902722</p>
            <p>ENGLAND</p>
          </div>

          <div id="webFooter">
            <h3>helpful link</h3>
            <a href="home.html" style={{ color: 'aliceblue' }}>
              home
            </a>
            <br />
            <br />
            <a href="#about" style={{ color: 'aliceblue' }}>
              about
            </a>
            <br />
            <br />
            <a href="#contact" style={{ color: 'aliceblue' }}>
              contact
            </a>
          </div>
        </div>

        <div id="credit">
          <a href="https://www.linkedin.com/in/">© ACKS Nan Mudhalvan 2023</a>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/" target="_blank">
            LICET
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
