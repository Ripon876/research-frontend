import React from "react";

function Comments() {
	return (
		<div className="articleComments">
			<h3>
				<strong>Comments</strong>
			</h3>
			<div className="border-top">
				<p>
					By submitting a comment you agree to abide by our Terms and
					Community Guidelines. If you find something abusive or that
					does not comply with our terms or guidelines please flag it
					as inappropriate.
				</p>
				<div className="mb-4">
					<p>
						<strong>2 Comments</strong>
					</p>
					<div className="py-3 border-0">
						<div className="d-flex flex-start w-100">
							<img
								className="rounded-circle shadow-1-strong me-3"
								src="https://via.placeholder.com/75x75"
								alt="avatar"
								width="90"
								height="90"
							/>
							<div className="form-outline w-100 ml-4">
								<textarea
									className="form-control"
									id="commentInput"
									placeholder="Start the discussion"
									rows="4"
								></textarea>

								<div className="mt-2 pt-1 text-right">
									<button
										type="button"
										className="btn btn-info btn-sm font-weight-bold px-3 rounded-pill"
										style={{
											backgroundColor: "#006699",
										}}
									>
										Comment
									</button>
								</div>

								<div className="d-flex flex-start mt-4 mb-3">
									<a className="me-3" href="#">
										<img
											className="rounded-circle shadow-1-strong"
											src="https://via.placeholder.com/50x50"
											width="50"
											height="50"
										/>
									</a>
									<div className="flex-grow-1 flex-shrink-1 ml-3">
										<div>
											<div className="d-flex justify-content-between align-items-center">
												<p className="mb-1">
													Simona Disa{" "}
													<span className="small">
														- 3 hours ago
													</span>
												</p>
											</div>
											<p className="small mb-0">
												letters, as opposed to using
												'Content here, content here',
												making it look like readable
												English.letters, as opposed to
												using 'Content here, content
												here', making it look like
												readable English.
											</p>
										</div>
									</div>
								</div>
								<div className="d-flex flex-start mt-4 mb-3">
									<a className="me-3" href="#">
										<img
											className="rounded-circle shadow-1-strong"
											src="https://via.placeholder.com/50x50"
											width="50"
											height="50"
										/>
									</a>
									<div className="flex-grow-1 flex-shrink-1 ml-3">
										<div>
											<div className="d-flex justify-content-between align-items-center">
												<p className="mb-1">
													Simona Disa{" "}
													<span className="small">
														- 3 hours ago
													</span>
												</p>
											</div>
											<p className="small mb-0">
												letters, as opposed to using
												'Content here, content here',
												making it content here', making
												it content herre', making it
												content herre', making it
												content here', making it look
												like readable English.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Comments;
