import React from "react";
import RadioPlayerBar from "../Components/RadioPlayerBar";

const Home = ({ radioStation }) => {
	return (
		<div>
			<h1>Home Page</h1>
			<RadioPlayerBar station={radioStation} />
		</div>
	);
};

export default Home;
