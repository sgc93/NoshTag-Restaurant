import React from "react";
import img from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
	<div className="app_aboutus app__bg flex__center section__padding" id="About">
		<div className="app__aboutus-overlay flex__center">
			<img src={img.N} alt="N letter" />
		</div>
		<div className="app__aboutus-content flex__center">
			<div className="app__aboutus-content_about">
				<h1 className="headtext__cormorant">About Us</h1>
				<img src={img.shuka} alt="shuka" className="spoon__img" />
				<p className="p__opensans">
					jdlsd sdjfl jfsl sljf sdjflsd dfjsdfjl sdfjsdlldsk kdfjsld kfjlsdfjjl
					fkdsf dfjsdf sldfjsld jflsd ljfdsl ljlkjl ljlkjlkj jljljkl lkjjlkjl
					jsdfjsll kdjflsd klsdfj ldjfsdj jdflsdj
				</p>
				<button className="custom__button">Know More</button>
			</div>
			<div className="app__aboutus-content_knife flex__center">
				<img src={img.knife} alt="about_knife" />
			</div>
			<div className="app__aboutus-content_history">
				<h1 className="headtext__cormorant">Our History</h1>
				<img src={img.shuka} alt="shuka" className="spoon__img" />
				<p className="p__opensans">
					jdlsd sdjfl jfsl sljf sdjflsd dfjsdfjl sdfjsdlldsk kdfjsld kfjlsdfjjl
					fkdsf dfjsdf sldfjsld jflsd ljfdsl ljlkjl ljlkjlkj jljljkl lkjjlkjl
					jsdfjsll kdjflsd klsdfj ldjfsdj jdflsdj
				</p>
				<button className="custom__button">Know More</button>
			</div>
		</div>
	</div>
);

export default AboutUs;
