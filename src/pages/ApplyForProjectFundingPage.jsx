import ApplyForProjectFunding from "../components/apply-for-project-funding/ApplyForProjectFunding";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function ApplyForProjectFundingPage() {
	return (
		<div>
			<Header />
			<div style={{ height: "100px" }}></div>
			<ApplyForProjectFunding />
			<Footer />
		</div>
	);
}

export default ApplyForProjectFundingPage;
