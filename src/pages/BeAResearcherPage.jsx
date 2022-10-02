import Header from  '../components/header/Header';
import BeAResearcher from  '../components/be-a-researcher/BeAResearcher';
import Footer from  '../components/footer/Footer';


function BeAResearcherPage() {
	return (
		<div>
			<Header />
			<div className='my-5 pt-5'></div>
			<BeAResearcher />
			<Footer />
		</div>
	)
}

export default BeAResearcherPage;