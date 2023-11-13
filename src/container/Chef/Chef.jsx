import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading.jsx";
import img from "../../constants/images";
import "./Chef.css";

const Chef = () => (
	<div className="app__bg section__padding app__wrapper">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={img.chef} alt="chef" />
		</div>
		<div className="app__wrapper_info">
			<SubHeading title="Chef’s Word" />
			<h1 className="headtext__cormorant">What we believe in</h1>
			<div className="app__chef-content">
				<div className="app__chef-content_quote">
					<img src={img.quote} alt="quote" />
					<p className="p__opensans">
						Lorem ipsum dolor sit amet consectetur, adipisicing
					</p>
				</div>
				<p className="p__opensans">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae non
					ipsum omnis maxime repudiandae soluta minus blanditiis quis
					laudantium, inventore voluptatibus quos quae nam. Repellendus in quos
					distinctio voluptatibus porro.
				</p>
			</div>
			<div className="app__chef-sign">
				<p className="p__cormorant">Bigman Bigo</p>
				<p className="p__opensans">chef & founder</p>
				<img src={img.sign} alt="sign" />
			</div>
			<div className="app__wrapper-chef_sign"></div>
		</div>
	</div>
);

export default Chef;
