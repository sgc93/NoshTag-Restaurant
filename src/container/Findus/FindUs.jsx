import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import img from "../../constants/images";

const FindUs = () => (
	<div className="app__wrapper app__bg flex__center section__padding">
		<div className="app__wrapper_info">
			<SubHeading title="Contact" />
			<h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
				Find Us
			</h1>
			<p style={{ color: "#AAA" }}>
				Mexico in front of Wabishebelle Hotel, Addis Ababa.
			</p>
			<div style={{ padding: "2rem 0rem" }}>
				<p className="p__cormorant" style={{ color: "var(--color-golden)" }}>
					Opening Hours
				</p>
				<p className="p__opensans">Mon - Fri: 10:00am - 02:00am</p>
				<p className="p__opensans">Sat - Sun: 10:00am - 03:00am</p>
			</div>
			<button className="custom__button">Visit Us</button>
		</div>
		<div className="app__wrapper_img">
			<img src={img.findus} alt="findus" />
		</div>
	</div>
);

export default FindUs;
