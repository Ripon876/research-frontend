import Header from  '../components/header/Header';
import Slider from  '../components/slider/Slider';
import OverView from  '../components/overview/OverView';
import About from  '../components/about/About';
import Awards from  '../components/awards/Awards';

function Home() {
	return (
		<>
			<Header />
			<Slider />
			<OverView />
			<About />
			<Awards />
		</>
	)
}

export default Home;