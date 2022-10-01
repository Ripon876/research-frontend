import Header from  '../components/header/Header';
import Slider from  '../components/slider/Slider';
import OverView from  '../components/overview/OverView';
import About from  '../components/about/About';
import Awards from  '../components/awards/Awards';
import Publication from  '../components/publication/Publication';
import Departments from  '../components/departments/Departments';
import FAQ from  '../components/faq/FAQ';

function Home() {
	return (
		<>
			<Header />
			<Slider />
			<OverView />
			<About />
			<Awards />
			<Publication />
			<Departments />
			<FAQ />
		</>
	)
}

export default Home;