import Header from "../components/header/Header";
import Slider from "../components/slider/Slider";
import OverView from "../components/overview/OverView";
import About from "../components/about/About";
import Awards from "../components/awards/Awards";
import Publication from "../components/publication/Publication";
import Departments from "../components/departments/Departments";
import Moderators from "../components/moderators/Moderators";
import Sponsors from "../components/sponsors/Sponsors";
import FAQ from "../components/faq/FAQ";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

function AboutPage() {
	return (
		<div>
			<Header />
			<div className="align-items-center d-flex hero justify-content-center mt-5 pt-5">
				<div>
					<div className="container mt-5 pt-5">
						<div className="section-title mb-5 px-5">
							<h2>About us</h2>
							<p>
								Magnam dolores commodi suscipit. Necessitatibus
								eius consequatur ex aliquid fuga eum quidem. Sit
								sint consectetur velit. Quisquam quos quisquam
								cupiditate.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/*<Slider />*/}
			<OverView />
			<About />
			<Awards />
			{/*<Publication />*/}
			<Moderators />
			<Departments />
			<Sponsors />
			<FAQ />
			<Contact />
			<Footer />
		</div>
	);
}

export default AboutPage;
