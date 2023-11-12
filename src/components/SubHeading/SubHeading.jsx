import React from "react";
import img from "../../constants/images";
const SubHeading = ({ title }) => {
	return (
		<div style={{ marginBottom: "1rem" }}>
			<p className="p__cormorant">{title}</p>
			<div className="subheading__img">
				<img src={img.spoon} alt="spoon" className="spoon__img" />
				<img src={img.shuka} alt="shuka" className="spoon__img" />
			</div>
		</div>
	);
};

export default SubHeading;
