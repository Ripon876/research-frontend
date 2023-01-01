import ConnectMyInstitutionfrom from "../components/connect-my-institution/ConnectMyInstitution";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function ConnectMyInstitutionPage() {
	return (
		<div>
			<Header />
			<div style={{ height: "100px" }}></div>
			<ConnectMyInstitutionfrom />
			<Footer />
		</div>
	);
}

export default ConnectMyInstitutionPage;
