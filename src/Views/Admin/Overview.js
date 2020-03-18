import React from "react";
import Wrapper from "../../Components/Wrapper/Wrapper";
// authentication for auth should expire after one hour or within a short period. So when not authenticated, redirect to /admin/login

const Overview = () => {
	return (
		<Wrapper>
			<p>admin overview here</p>
		</Wrapper>
	);
};

export default Overview;
