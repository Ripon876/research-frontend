import Header from  '../components/header/Header';
import Publications from  '../components/publications/Publications';
import Footer from  '../components/footer/Footer';


function PublicationPage() {
	return (
		<div>
			<Header />
			<div className='my-4 pt-5'></div>
			<Publications />
			<Footer />
		</div>
	)
}

export default PublicationPage;