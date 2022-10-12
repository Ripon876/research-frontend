import Header from  '../components/header/Header';
import SignUp from  '../components/sign-up/SignUp';
import Footer from  '../components/footer/Footer';


function SignUpPage() {
	return (
		<div>
			<Header />
			<div className='my-4 pt-5'></div>
			<SignUp />
			<Footer />
		</div>
	)
}

export default SignUpPage;