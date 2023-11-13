import React from "react";
import { MenuItem, SubHeading } from "../../components";
import { data } from "../../constants";
import img from "../../constants/images";
import "./SpecialMenu.css";

const SpecialMenu = () => (
	<div className="app__menu flex__center section__padding" id="TodaySpecials">
		<div className="app__menu-heading">
			<SubHeading title="Menu that fits you palatte" />
			<h1 className="headtext__cormorant">today's special</h1>
		</div>
		<div className="app__menu-menuList flex__center">
			<div className="app__menu-menuList_wines flex__center">
				<p className="app__menu-menuList_type">Wine & Beer</p>
				<div className="app__menu-menuList_items">
					{data[0].map((wine, index) => {
						return (
							<MenuItem
								key={wine.title + index}
								title={wine.title}
								tag={wine.tags}
								price={wine.price}
							/>
						);
					})}
				</div>
			</div>
			<div className="app__menu-menuList_img">
				<img src={img.menu} alt="menu img" />
			</div>
			<div className="app__menu-menuList_cocktails flex__center">
				<p className="app__menu-menuList_type">Cocktails</p>
				<div className="app__menu-menuList_items">
					{data[1].map((cocktail, index) => {
						return (
							<MenuItem
								key={cocktail.title + index}
								title={cocktail.title}
								tag={cocktail.tags}
								price={cocktail.price}
							/>
						);
					})}
				</div>
			</div>
		</div>
		<div style={{ marginTop: "15px" }}>
			<button className="custom__button">View More</button>
		</div>
	</div>
);

export default SpecialMenu;
