import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import img from "../../constants/images";
import "./Header.css";

const Header = () => (
	<div className="app__header app__wrapper section__padding" id="Home">
		<div className="app__wrapper_info">
			<SubHeading title="Chase the new Flavour" />
			<h1 className="app__header-h1">The Key to Fine Dining</h1>
			<p className="p__opensans" style={{ margin: "2rem 0rem" }}>
				have memorable time with noshing fantastic food. your family will be
				delighted if you are willing to have some amazing time with us.
			</p>
			<button className="custom__button">Explore Menu</button>
		</div>
		<div className="app__wrapper_img">
			<img src={img.welcome} alt="" />
		</div>
	</div>
);

export default Header;
