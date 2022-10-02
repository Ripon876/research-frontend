import Header from  '../components/header/Header';
import Publication from  '../components/publication/Publication';
import Footer from  '../components/footer/Footer';


function PublicationPage() {
	return (
		<div>
			<Header />
			<div className='my-4 pt-5'></div>
			<Publication />
			<Footer />
		</div>
	)
}

export default PublicationPage;