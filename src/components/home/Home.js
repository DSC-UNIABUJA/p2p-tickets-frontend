import React from "react";
import Wrapper from "../misc/Wrapper";
import HomeComponent from "../../StyledComponents/home/Home"
import {Button} from "../../StyledComponents/utils"

const Home = (props) => {
  return (
    <Wrapper public>
      <HomeComponent>
        <h1 className="mainHeader">Ticketing App ▲</h1>
        <p className="mainParagraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At amet
          omnis, in perspiciatis optio cumque, sapiente quaerat, voluptate
          repellat unde maxime ea soluta eaque reprehenderit rem. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aliquid, voluptatum.
        </p>

        {/* some pictures */}

        <h2 className="secondHeader">Features</h2>
        <p className="secondHeaderParagraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          nulla non deserunt vel accusantium deleniti tempora fugiat aperiam
          eveniet nostrum. Eos veniam laborum sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
        </p>
        <p className="secondHeaderParagraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum vel
          commodi tempora quae temporibus iusto velit officiis distinctio odio
          corrupti? Ex, atque. Debitis, dolore iusto Lorem ipsum dolor sit amet, consectetur adipisicing.
        </p>

        <h2 className="thirdHeader">Let's help you grow your business</h2>
        <p className="thirdHeaderParagraph">
          Haven developed smart solutions for numerous types of organizations,
          we know what matters most. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum!
        </p>

        <Button onClick={() => props.history.push( "/register" )}>
          Get Started Today
        </Button>

        {/* get started button */}
      </HomeComponent>
    </Wrapper>
  );
};

export default Home;
