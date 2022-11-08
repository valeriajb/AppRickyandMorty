import React from "react";
import ListSocial from "./ListSocial";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer-container">
      <div className="linea"></div>
      <ListSocial />
      <p class="copyright">
        @Valeria Jiménez Bedoya. All rights reserved.2022.
      </p>
    </footer>
  );
}

export default Footer;
