import { useState } from "react";
import Moment from "react-moment";
import { challenge } from "./smd";
import SolutionForm from "./solutionForm/SolutionForm";

function Challenge() {
	const [showForm, setShowForm] = useState(false);

	return (
		<div>
			<div className="mt-5 pt-5">
				<div className="container mt-5 pt-5">
					<div className="row">
						<div className="col-sm-7 col-md-7">
							<div className="section-title text-left pb-2">
								<h3>
									<b>
										Lorem ipsum dolor sit amet, consectetur
									</b>
								</h3>
								<h6 className="card-subtitle mb-2 text-muted">
									<span>Published: </span>
									<span>
										<Moment fromNow>2022-10-27</Moment>
									</span>
								</h6>
								<div>
									<h6 className="card-subtitle mb-2 text-muted">
										{challenge?.tags?.map((tag) => (
											<span
												className="bg-secondary mx-1 px-1 rounded text-center text-white"
												style={{ cursor: "pointer" }}
											>
												{tag}
											</span>
										))}
									</h6>
								</div>
							</div>
						</div>
						<div className="col-sm-5 col-md-5">
							<div className="pb-2 section-title text-right">
								<button
									className="btn btn-sm py-md-3 subBtn"
									onClick={() => {
										setShowForm(!showForm);
									}}
								>
									Submit Your Solution
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mb-5">
				<div className='mb-2'>
					<h5>Attachments:</h5>
					<div className="justify-content-center row w-50">
						{challenge?.files?.map((file) => (
							<div
								className="m-2"
								style={{
									height: "100px",
									width: "100 px",
								}}
							>
								{file.type === "image" && (
									<img
										src={file.data}
										className="img-fluid rounded w-100 h-100"
										title={file.name}
										style={{ objectFit: "cover" }}
									/>
								)}
								{file.type === "video" && (
									<div className="w-100 h-100 position-relative">
										<video
											src={file.data}
											className="img-fluid rounded w-100 h-100"
											title={file.name}
											style={{
												objectFit: "cover",
											}}
										/>
										<i className="icofont-play-alt-1 icofont-3x videoPlayBtn text-white-50"></i>
									</div>
								)}
								{file.type === "application" && (
									<i
										className="img-fluid rounded w-100 h-100 icofont-file-alt icofont-5x"
										title={file.name}
										style={{ objectFit: "cover" }}
									></i>
								)}
							</div>
						))}
					</div>
				</div>
				<div>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate.
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate.
					</p>
				</div>
				<div>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate.
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit.Magnam dolores commodi suscipit.
						Necessitatibus eius consequatur ex aliquid fuga eum
						quidem. Sit sint consectetur velit. Quisquam quos
						quisquam cupiditate. Magnam dolores commodi suscipit.
						Necessitatibus eius consequatur ex aliquid fuga eum
						quidem. Sit sint consectetur velit. Quisquam quos
						quisquam cupiditate.
					</p>
				</div>
				<div>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate.
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit.Magnam dolores commodi suscipit.
						Necessitatibus eius consequatur ex aliquid fuga eum
						quidem. Sit sint consectetur velit. Quisquam quos
						quisquam cupiditate. Magnam dolores commodi suscipit.
						Necessitatibus eius consequatur ex aliquid fuga eum
						quidem. Sit sint consectetur velit.Magnam dolores
						commodi suscipit. Necessitatibus eius consequatur ex
						aliquid fuga eum quidem. Sit sint consectetur velit.
						Quisquam quos quisquam cupiditate. Magnam dolores
						commodi suscipit. Necessitatibus eius consequatur ex
						aliquid fuga eum quidem. Sit sint consectetur velit.
						Quisquam quos quisquam cupiditate.
					</p>
				</div>
				<div>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate.
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit.
					</p>
				</div>
			</div>
			<div className="container mb-5">
				<div className="section-title text-left pb-2">
					<h4>Found a solution ?</h4>
					<button
						className="btn subBtn btn-sm"
						onClick={() => {
							setShowForm(!showForm);
						}}
					>
						Submit it now
					</button>
				</div>
			</div>
			{showForm && <SolutionForm cb={setShowForm} />}
		</div>
	);
}

export default Challenge;
