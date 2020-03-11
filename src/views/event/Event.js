import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Wrapper from "../../components/wrapper/Wrapper";
import styled from "styled-components";
import { connect } from "react-redux";
import NotFound from "../notfound/NotFound";
import { getEvents } from "../../store/actions/eventAction";
import Loader from "../../components/loader/Loader";

const EventStyle = styled.div`
	.textCenter {
		text-align: center;
	}
`;

const Event = props => {
	const eventId = props.match.params.eventId;
	const { getEvents, allEvents } = props;
	useEffect(() => {
		getEvents();
	}, [getEvents]);

	if (allEvents === null) {
		return <Loader />;
	} else if (
		Array.isArray(allEvents) &&
		allEvents.find(e => e.id.toString() === eventId)
	) {
		const currentEvent = allEvents.find(e => e.id.toString() === eventId);
		return (
			<>
				<Helmet>
					<title>name of event | Ticketr</title>
				</Helmet>
				<Wrapper>
					<EventStyle>
						<h1 className="mainHeader textCenter">name of event</h1>
						<h3 className="textCenter">About</h3>
						<p>about event</p>

						<p>picture</p>
						<p>
							about(1st paragraph). If more about(put it in another paragraph)
							date, time, location
						</p>
						<p> two links. one to view map and another to register</p>
					</EventStyle>
				</Wrapper>
			</>
		);
	} else if (
		Array.isArray(allEvents) &&
		!allEvents.find(e => e.id.toString() === eventId)
	) {
		return <NotFound />;
	} else {
		return <Loader />;
	}
};

const mapStateToProps = state => ({
	allEvents: state.events.allEvents
});

const mapDispatchToProps = {
	getEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(Event);
