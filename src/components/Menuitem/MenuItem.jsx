import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, tag, price }) => {
	return (
		<>
			<div className="app__menuItem">
				<div className="app__menuItem-head">
					<div className="app__menuItem-head_name">
						<p className="p__cormorant" style={{ color: "#DCCA87" }}>
							{title}
						</p>
					</div>
					<div className="app__menuItem-dash"></div>
					<div className="app__menuItem-head_price">
						<p className="p__cormorant">{price}</p>
					</div>
				</div>
				<div className="app__menuItem-sub">
					<p className="p__opensans" style={{ color: "#AAA" }}>
						{tag}
					</p>
				</div>
			</div>
		</>
	);
};

export default MenuItem;
