import Header from  '../components/header/Header';
import Awards from  '../components/awards/Awards';
import Institutions from  '../components/institutions/Institutions';
import Footer from  '../components/footer/Footer';


function AwardsPage() {
	return (
		<div>
			<Header />
			<div className='my-5 pt-4'></div>
			<Awards />
			<Institutions />
			<Footer />
		</div>
	)
}

export default AwardsPage;