import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import img from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
	const [isToggleToX, setIsToggleToX] = useState(false);

	function toggle(toX) {
		setIsToggleToX((isToggleToX) => toX);
	}

	return (
		<nav className="app__navbar">
			<div className={isToggleToX ? "hide" : "app__navbar-logo"}>
				<img src={img.gericht} alt="app logo" />
			</div>
			<List nameClass="app__navbar-links" />
			<div className={isToggleToX ? "hide" : "app__navbar-login"}>
				<a href="#Login" className="p__opensans">
					Log In / Register
				</a>
				<div></div>
				<a href="/" className="p__opensans">
					Book Table
				</a>
			</div>
			<div className="app__navbar-smallscreen">
				<GiHamburgerMenu
					color="#fff"
					fontSize={27}
					className={isToggleToX ? "hide" : ""}
					onClick={() => toggle(true)}
				/>
				<div
					className={
						isToggleToX
							? "app__navbar-smallscreen_overlay flex__center slide-bottom"
							: "hide"
					}
				>
					<MdOutlineRestaurantMenu
						fontSize={27}
						className={isToggleToX ? "overlay__close" : "hide"}
						onClick={() => toggle(false)}
					/>
					<ul className="app__navbar-smallscrean_links">
						<li className="p__opensans">
							<a href="#Home">Home</a>
						</li>
						<li className="p__opensans">
							<a href="#About">About</a>
						</li>
						<li className="p__opensans">
							<a href="#TodaySpecials">Today's Specials</a>
						</li>
						<li className="p__opensans">
							<a href="#Awards">Awards</a>
						</li>
						<li className="p__opensans">
							<a href="#Contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

function List({ nameClass }) {
	return (
		<ul className={nameClass}>
			<li className="p__opensans">
				<a href="#Home">Home</a>
			</li>
			<li className="p__opensans">
				<a href="#About">About</a>
			</li>
			<li className="p__opensans">
				<a href="#TodaySpecials">Today's Specials</a>
			</li>
			<li className="p__opensans">
				<a href="#Awards">Awards</a>
			</li>
			<li className="p__opensans">
				<a href="#Contact">Contact</a>
			</li>
		</ul>
	);
}

export default Navbar;
