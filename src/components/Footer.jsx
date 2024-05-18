import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made by Nayan Kumar</p>
      <p>Copyright @ {year}</p> 
    </footer>
  );
}

export default Footer;
