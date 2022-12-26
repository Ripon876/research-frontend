import Comment from "./Comment";

function Comments() {
	return (
		<div className="blogComments">
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
									rows="7"
								></textarea>

								<div className="mt-2 pt-1 text-right">
									<button
										type="button"
										className="btn btn-info btn-sm font-weight-bold px-3 rounded-pill subBtn"
										style={{
											backgroundColor: "#006699",
										}}
									>
										Comment
									</button>
								</div>

								<Comment />
								<Comment />
								<Comment />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Comments;
