import Category from "./category/Category";
import Form from "./post_form/Form";
import "./Hero.css";

function Hero() {
	return (
		<div>
			<div className="container-fluid mt-5 pt-5 px-0">
				<div className="row">
					<div className="col-md-7">
						<div className="row">
							<div className="col-7">
								<Category />
							</div>
							<div className="col-5 position-relative px-0">
								<div className="position-absolute heroQuickLinks">
									<div>
										<p className="mb-0">
											sdf sfdfds
											fdsfdsfadfdsfsdafdsfdsfasdf
										</p>
										<a
											class="btn px-4 py-2 mt-2 rounded-pill"
											href="/be-a-researcher"
											style={{
												background: "rgb(33, 37, 41)",
												color: "white",
											}}
										>
											Be a Researcher
										</a>
									</div>
									<div className='mt-4'>
										<p className="mb-0">
											sdf sfdfds
											fdsfdsfadfdsfsdafdsfdsfasdf
										</p>
										<a
											class="btn px-4 py-2 mt-2 rounded-pill"
											href="/be-a-researcher"
											style={{
												background: "rgb(33, 37, 41)",
												color: "white",
											}}
										>
											Connect my institution
										</a>
									</div>
									<div className='mt-4'>
										<p className="mb-0">
											sdf sfdfds
											fdsfdsfadfdsfsdafdsfdsfasdf
										</p>
										<a
											class="btn px-4 py-2 mt-2 rounded-pill"
											href="/be-a-researcher"
											style={{
												background: "rgb(33, 37, 41)",
												color: "white",
											}}
										>
											Donate us
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-5">
						<Form />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
