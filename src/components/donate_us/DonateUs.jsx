import Donor from "./Donor";

function DonateUs() {
	return (
		<div>
			<div className="align-items-center d-flex hero justify-content-center mt-5 pt-5">
				<div>
					<div className="container mt-5 pt-5">
						<div className="section-title mb-5 px-5">
							<h2>Donate Us</h2>
							<p>
								Magnam dolores commodi suscipit. Necessitatibus
								eius consequatur ex aliquid fuga eum quidem. Sit
								sint consectetur velit. Quisquam quos quisquam
								cupiditate.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container mb-5">
				<div className="row">
					<div className="col-md-6 mb-4">
						<img
							src="./assets/img/donate-us/gift.svg"
							className="img-fluid"
						/>
					</div>
					<div className="col-md-6 d-flex align-items-center">
						<div>
							<p style={{ fontSize: "20px" }}>
								Magnam dolores commodi suscipit. Necessitatibus
								eius consequatur ex aliquid fuga eum quidem. Sit
								sint consectetur velit. Quisquam quos quisquam
								cupiditate.Magnam dolores commodi suscipit.
								Necessitatibus eius consequatur ex aliquid fuga
								eum quidem. Sit sint consectetur velit. Quisquam
								quos quisquam cupiditate.
							</p>
							<button className="btn subBtn">Donate Now</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container mb-5">
				<h4 className="font-weight-bold my-4">Our Donors</h4>
				<div className="justify-content-around row">
					<Donor />
					<Donor />
					<Donor />
					<Donor />
					<Donor />
				</div>
			</div>
		</div>
	);
}

export default DonateUs;
