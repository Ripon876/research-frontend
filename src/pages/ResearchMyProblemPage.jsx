import Header from  '../components/header/Header';
import ResearchMyProblem from  '../components/research-my-problem/ResearchMyProblem';
import Footer from  '../components/footer/Footer';


function ResearchMyProblemPage() {
	return (
		<div>  
		    <Header />
		    <div className='my-4 pt-5'></div>
			<ResearchMyProblem />
			<Footer />
		</div>
	)
}

export default ResearchMyProblemPage;