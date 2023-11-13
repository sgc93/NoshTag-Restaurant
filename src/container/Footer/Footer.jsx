import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
	<div className="app__footer flex__center section__padding">
		<FooterOverlay />
		<Newsletter />
	</div>
);

export default Footer;
