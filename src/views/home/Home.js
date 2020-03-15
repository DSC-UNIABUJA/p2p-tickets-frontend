import React, {useEffect} from "react";
import Typewriter from "typewriter-effect";
import Wrapper from "../../components/wrapper/Wrapper";
import Home from "./homeStyle";
import Events from "../../components/events/Events";
import PaymentIcon from "@material-ui/icons/Payment";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";

const Button = styled.div`
	margin-top: 3rem;
	margin-bottom: 3rem;
	text-align: center;
	display: block;
	margin-left: auto;
	margin-right: auto;

	a {
		text-decoration: none;
		font-size: 1.1rem;
		color: white;
		font-weight: 500;
		border-radius: 50px;
		padding: 1rem 3rem;
		background: rgb(248, 97, 80);
		cursor: pointer;
		transition: ease-in-out 0.4s;

		&:hover {
			transform: scale(1.03);
		}
	}
`;

const HomeComponent = () => {
	// scroll to top on mount
	const {pathname} = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<Wrapper>
			<Home>
				<h1 className="mainHeader">Ticketr</h1>
				<p className="mainParagraph centerParagraph">
					Buy, Sell and Transfer Tickets for Events{" "}
					<span className="cardContainer">
						<PaymentIcon style={{color: "#3672a4"}} fontSize="large" />
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
									"100% paperless ticketing solution 💯",
								],
								autoStart: true,
								loop: true,
								delay: 30,
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
				<p className="thirdHeaderParagraph centerParagraph">
					Haven developed smart solutions for numerous types of organizations, we know
					what matters most. And we've put them in place to make life easier for both you
					and your customers.
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

				<Button>
					<Link to="/register">Create an Event</Link>
				</Button>
			</Home>
		</Wrapper>
	);
};

export default HomeComponent;
