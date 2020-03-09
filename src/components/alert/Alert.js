import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AlertComponent from "./AlertComponent";

const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map(alert => <AlertComponent alert={alert} key={alert.id} />);
Alert.propTypes = {
	alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
