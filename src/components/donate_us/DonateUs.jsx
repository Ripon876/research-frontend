import Donors from "./Donors";

function DonateUs() {
	return (
		<div>
			<div className="align-items-center d-flex hero justify-content-center mt-5 pt-5">
				<div>
					<div className="container mt-5 pt-5">
						<div className="section-title mb-5 px-5">
							<h2>Donate Us</h2>
							<p>
								Magnam dolores commodi suscipit. Necessitatibus eius consequatur
								ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
								quos quisquam cupiditate.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container mb-5">
				<div className="row">
					<div className="col-md-6 mb-4">
						<img src="./assets/img/donate-us/gift.svg" className="img-fluid" />
					</div>
					<div className="col-md-6 d-flex align-items-center">
						<div>
							<p style={{ fontSize: "18px" }}>
								Magnam dolores commodi suscipit. Necessitatibus eius consequatur
								ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
								quos quisquam cupiditate.Magnam dolores commodi suscipit.
								Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit
								sint consectetur velit. Quisquam quos quisquam cupiditate.
							</p>
							<button className="btn subBtn">Donate Now</button>
						</div>
					</div>
				</div>
			</div>
			<Donors />
			<div className="container my-5">
				<h4 className="font-weight-bold my-4">Donate us via</h4>
				<div>
					<div className='d-flex justify-content-around'>
						<div style={{ height: "100px", width: "200px" ,cursor: 'pointer'}} className='rounded shadow p-2'>
							<img
								src="https://freelogopng.com/images/all_img/1656227518bkash-logo-png.png"
								className="img-fluid rounded w-100 h-100"
								style={{ objectFit: "contain" }}
							/>
						</div>
						<div style={{ height: "100px", width: "200px" ,cursor: 'pointer'}} className='rounded shadow p-2'>
							<img
								src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
								className="img-fluid rounded w-100 h-100"
								style={{ objectFit: "contain" }}
							/>
						</div>
						<div style={{ height: "100px", width: "200px" ,cursor: 'pointer'}} className='rounded shadow p-2'>
							<img
								src="https://www.freepnglogos.com/uploads/discover-png-logo/mastercard-discover-logo-png-22.png"
								className="img-fluid rounded w-100 h-100"
								style={{ objectFit: "contain" }}
							/>
						</div>
						<div style={{ height: "100px", width: "200px" ,cursor: 'pointer'}} className='rounded shadow p-2'>
							<img
								src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png"
								className="img-fluid rounded w-100 h-100"
								style={{ objectFit: "contain" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DonateUs;
