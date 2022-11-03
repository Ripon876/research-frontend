import Internship from '../components/apply/internship/Internship';
import Work from '../components/apply/work/Work';
import Header from  '../components/header/Header';
import Footer from  '../components/footer/Footer';

function InternshipPage() {
	return (
		<div>
			<Header />
			<div className='mt-5 pt-5'></div>
			<div className='mt-3 pt-3'></div>
			<Internship />
			<div className='mt-5 pt-5'></div>
			<Footer />
		</div>
	)
}

function WorkPage() {
	return (
		<div>
			<Header />
			<div className='mt-5 pt-5'></div>
			<div className='mt-3 pt-3'></div>
			<Work />
			<div className='mt-5 pt-5'></div>
			<Footer />
		</div>
	)
}


export {
	InternshipPage,
	WorkPage
};