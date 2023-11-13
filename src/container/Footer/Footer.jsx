import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import img from "../../constants/images";
import "./Footer.css";

const Footer = () => (
	<div className="app__footer flex__center section__padding">
		<FooterOverlay />
		<Newsletter />
		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h1 className="app__footer-headtext">Contact Us</h1>
				<p className="p__opensans">Mexico, Addis Ababa</p>
				<p className="p__opensans">+2519909090</p>
				<p className="p__opensans">+2519909090</p>
			</div>
			<div className="app__footer-links_logo">
				<img src={img.noshtag} alt="noshtag" />
				<p className="p__opensans">
					"The best way to find yourself is to lose yourself in the service of
					others."
				</p>
				<div className="app__footer-links_icons">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>
			<div className="app__footer-links_work">
				<h1 className="app__footer-headtext">Working Hours</h1>
				<p className="p__opensans">Monday - Friday</p>
				<p className="p__opensans">08:00Am - 12:00Am</p>
				<p className="p__opensans">Saturday - Sunday</p>
				<p className="p__opensans">07:00Am - 11:00Pm</p>
			</div>
		</div>
		<div className="footer__copyright">
			<p className="p__opensans">2023 NoshTag. All Rights Reserved.</p>
		</div>
	</div>
);

export default Footer;
