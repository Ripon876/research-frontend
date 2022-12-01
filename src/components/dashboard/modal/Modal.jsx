import { useEffect } from "react";
import { Fade } from "react-reveal";
import { useSelector } from "react-redux";
// import Post from "./Post";
import Post from "./post/Post";
import Research from "./Research";
import Publication from "./Publication";
import Notifications from "./Notifications";
import Challenge from "./Challenge";
import Toast from "../../../utilities/Toast";
import "./Modal.css";

function Modal({ data, view }) {
	const userType = useSelector((state) => state.user.type);

	const approve = () => {
		Toast(
			{
				type: "success",
				icon: "success",
				title: `${data.type} Approved`,
			},
			view
		);
	};

	const deny = () => {
		Toast(
			{ type: "success", icon: "success", title: `${data.type} Denied` },
			view
		);
	};

	const deleteItem = () => {
		Toast(
			{ type: "success", icon: "success", title: `${data.type} Deleted` },
			view
		);
	};

	return (
		<div>
			<Fade duration={500}>
				<div className="contentViewer">
					<div className="container p-4 rounded shadow">
						<div className="h-100">
							<div>
								<h4 className="mb-3">
									Viewing :{" "}
									<span className="bg-secondary mx-1 px-2 py-1 rounded small text-center text-white">
										{data?.type}
									</span>
								</h4>
								<span>
									<i
										className="icofont-close icofont-2x formClose"
										onClick={() => {
											view(false);
										}}
									></i>
								</span>
							</div>
							{data?.type === "Notifications" && (
								<Notifications />
							)}
							{data?.type === "Post" && (
								<Post post={data?.data} />
							)}
							{data?.type === "Research" && (
								<Research research={data?.data} />
							)}
							{data?.type === "Publication" && (
								<Publication publication={data?.data} />
							)}
							{data?.type === "Challenge" && (
								<Challenge challenge={data?.data} />
							)}

							{data?.type !== "Notifications" && (
								<div
									className="bg-dark pl-4 position-absolute py-4 w-100"
									style={{ bottom: 0, left: 0 }}
								>
									{/*	{data?.data?.status === "Review" &&
									userType !== "Researcher" ? (
										<div>
											<button
												className="btn rounded subBtn"
												onClick={approve}
											>
												Approve
											</button>
											<button
												className="btn rounded subBtn denyBtn ml-2"
												onClick={deny}
											>
												Deny
											</button>
										</div>
									) : (
										<div>
											{data?.data?.status ===
											"Approved" ? (
												<button
													disabled
													className="btn rounded subBtn approvedBtn"
												>
													Approved
												</button>
											) : data?.data?.status ===
											  "Denied" ? (
												<button
													disabled
													className="btn rounded subBtn denyBtn ml-2"
												>
													Denied
												</button>
											) : (
												<>
													<button
														disabled
														className="btn rounded subBtn reviewBtn ml-2"
													>
														Reviewing
													</button>
													<button
														className="btn rounded subBtn denyBtn ml-2"
														onClick={deleteItem}
													>
														Delete <i class="icofont-ui-delete"></i>
													</button>
												</>
											)}
										</div>
									)}
									*/}

									{data?.type == "Post" ? (
										<>
											<button
												className="btn rounded subBtn denyBtn ml-2"
												onClick={deleteItem}
											>
												Delete{" "}
												<i class="icofont-ui-delete"></i>
											</button>
										</>
									) : (
										<>
											{(data?.data?.status === "Review" || data?.data?.status === "Loading") &&
											userType !== "Researcher" ? (
												<div>
													<button
														className="btn rounded subBtn"
														onClick={approve}
													>
														Approve
													</button>
													<button
														className="btn rounded subBtn denyBtn ml-2"
														onClick={deny}
													>
														Deny
													</button>
												</div>
											) : (
												<div>
													{data?.data?.status ===
													"Approved" ? (
														<button
															disabled
															className="btn rounded subBtn approvedBtn"
														>
															Approved
														</button>
													) : data?.data?.status ===
													  "Denied" ? (
														<button
															disabled
															className="btn rounded subBtn denyBtn ml-2"
														>
															Denied
														</button>
													) : (
														<>
															<button
																disabled
																className="btn rounded subBtn reviewBtn ml-2"
															>
																Reviewing
															</button>
															<button
																className="btn rounded subBtn denyBtn ml-2"
																onClick={
																	deleteItem
																}
															>
																Delete{" "}
																<i class="icofont-ui-delete"></i>
															</button>
														</>
													)}
												</div>
											)}
										</>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default Modal;
