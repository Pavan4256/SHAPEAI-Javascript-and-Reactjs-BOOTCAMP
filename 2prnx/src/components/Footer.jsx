import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright to Gattupalli Pavan kumar @ {currYear}</p>
    </footer>
  );
}

export default Footer;
