import ApplyForInvestment from "../components/apply-for-investment/ApplyForInvestment";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function ApplyForInvestmentPage() {
	return (
		<div>
			<Header />
			<div style={{ height: "100px" }}></div>
			<ApplyForInvestment />
			<Footer />
		</div>
	);
}

export default ApplyForInvestmentPage;
