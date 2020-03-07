import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Wrapper from "../misc/Wrapper";
import HomeComponent from "../../StyledComponents/home/Home";
import { Button } from "../../StyledComponents/utils";
import Events from "../events/Events";

const Home = props => {
  return (
    <Wrapper public>
      <HomeComponent>
        <h1 className="mainHeader">Ticketr▲</h1>
        <p className="mainParagraph">
          Buy, Sell and Transfer Tickets for Events{" "}
          <span role="img" aria-label="ticket emoji">
            🎫
          </span>
        </p>

        <div className="typewriterEffect">
          <div>
            <Typewriter
              options={{
                strings: [
                  "Easily register your events in no time 🕺",
                  "Forget the stress involved in manually selling tickets 🚣",
                  "Never worry about losing your tickets! 🤸",
                  "Tickets are sent securely 🚀",
                  "Payment is 100% secure ✊",
                  "100% paperless ticketing solution 💯"
                ],
                autoStart: true,
                loop: true,
                delay: 30
              }}
            />
            {/* <span className="cursor" /> */}
          </div>
        </div>

        {/* some pictures */}

        <h3 className="secondHeader">
          Upcoming Events{" "}
          <span role="img" aria-label="Lightening and Fire Emojis">
            ⚡🔥
          </span>
        </h3>
        <Events />

        <h2 className="thirdHeader">Sell Tickets for your events</h2>
        <p className="thirdHeaderParagraph">
          Haven developed smart solutions for numerous types of organizations,
          we know what matters most. And we've put them in place to make life easier for both you and your customers.
        </p>

        <ul className="sellTicketLists">
          <li>&#10004; &nbsp;Getting started is completely free</li>
          <li>&#10004; &nbsp;You get real time sales information</li>
          <li>&#10004; &nbsp;Tickets are issued to your buyers instantly by mail</li>
          <li>&#10004; &nbsp;You only pay a very minimal fee per ticket sale</li>
          <li>
            &#10004; &nbsp;We're always available and you can contact us anytime for
            feedbacks or complaints.
          </li>
        </ul>

        <Button onClick={() => props.history.push("/register")}>
          Create an Event
        </Button>

        {/* get started button */}
      </HomeComponent>
    </Wrapper>
  );
};

export default Home;
