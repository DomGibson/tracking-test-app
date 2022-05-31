import React from "react";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-TP93C6F'
}
 
TagManager.initialize(tagManagerArgs)

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2020
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;