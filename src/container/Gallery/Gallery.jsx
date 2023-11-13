import { useRef } from "react";

import {
	BsArrowLeftShort,
	BsArrowRightShort,
	BsInstagram,
} from "react-icons/bs";
import SubHeading from "../../components/SubHeading/SubHeading";
import img from "../../constants/images";
import "./Gallery.css";

const galleryImg = [img.gallery01, img.gallery02, img.gallery03, img.gallery04];

const Gallery = () => {
	const scrollRef = useRef(null);

	function scroll(drx) {
		const amount = drx === "left" ? 300 : -300;
		const currentState = scrollRef.current;

		currentState.scrollLeft += amount;
	}
	return (
		<div className="app__gallery flex__center">
			<div className="app__gallery-content">
				<SubHeading title="Instagram" />
				<h1 className="headtext__cormorant">Photo Gallery</h1>
				<p className="p__opensans">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
					mattis ipsum turpis elit elit scelerisque egestas mu.
				</p>
				<button className="custom__button">View More</button>
			</div>
			<div className="app__gallery-images">
				<div className="app__gallery-images_container" ref={scrollRef}>
					{galleryImg.map((img, index) => {
						return (
							<div
								className="app__gallery-images_card flex__center"
								key={`gallery__img-${index + 1}`}
							>
								<img src={img} alt="gallery" />
								<BsInstagram className="gallery__images-icon" />
							</div>
						);
					})}
				</div>
				<div className="app__gallery-images_arrows">
					<BsArrowLeftShort
						className="gallery__arrow-icon"
						onClick={() => scroll("left")}
					/>
					<BsArrowRightShort
						className="gallery__arrow-icon"
						onClick={() => scroll("right")}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
