import React from 'react';
import FooterComponent from "../../StyledComponents/misc/Footer"

const Footer = () => {
  return (
    <div>
      <FooterComponent>
        <p>
          &copy; {new Date().getFullYear()} <br />
          Developer Student Club UniAbuja
        </p>
      </FooterComponent>
    </div>
  );
}

export default Footer

