import React from "react";

import "./App.css";
import { Navbar } from "./components";
import {
	AboutUs,
	Chef,
	FindUs,
	Footer,
	Gallery,
	Header,
	SpecialMenu,
} from "./container";

const App = () => (
	<div>
		<Navbar />
		<Header />
		<AboutUs />
		<SpecialMenu />
		<Chef />
		<Gallery />
		<FindUs />
		<Footer />
	</div>
);

export default App;
