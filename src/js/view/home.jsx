import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "../component/NavBar.jsx";
import JumboTron from "../component/JumboTron.jsx";
import Card from "../component/Card.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<JumboTron />
			<Card />
		</div>
	);
};

export default Home;
