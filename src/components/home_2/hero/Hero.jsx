import Category from "./category/Category";
import Form from "./post_form/Form";

function Hero() {
	return (
<div>
	<div className='container mt-5 pt-5'>
		<div className="row">
			<div className="col-md-6">
				<Category />
			</div>
			<div className="col-md-6">
				<Form />
			</div>
		</div>
	</div>
</div>
	);
}

export default Hero;
