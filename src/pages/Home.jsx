import Header from  '../components/header/Header';
import Slider from  '../components/slider/Slider';
import OverView from  '../components/overview/OverView';
import About from  '../components/about/About';

function Home() {
	return (
		<>
			<Header />
			<Slider />
			<OverView />
			<About />
		</>
	)
}

export default Home;