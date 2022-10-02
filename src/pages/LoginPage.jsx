import Header from  '../components/header/Header';
import Login from  '../components/login/Login';
import Footer from  '../components/footer/Footer';



function LoginPage() {
	return (
		<div>
			<Header />
			<div className='my-4 pt-5'></div>
			<Login />
			<Footer />
		</div>
	)
}

export default LoginPage;