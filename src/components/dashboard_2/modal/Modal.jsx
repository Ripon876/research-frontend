import { Fade } from "react-reveal";
import Post from "./Post";
import Notifications from "./Notifications";
import Toast from "../../../utilities/Toast";
import "./Modal.css";

function Modal({ data, view }) {
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
			{ type: "error", icon: "error", title: `${data.type} Denied` },
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
									Viewing : {data?.data?.title}
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

							{data?.type !== "Notifications" && (
								<div
									className="bg-dark pl-4 position-absolute py-4 w-100"
									style={{ bottom: 0, left: 0 }}
								>
									{data?.data?.status === "Review" ? (
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
													className="btn rounded subBtn"
												>
													Approved
												</button>
											) : (
												<button
													disabled
													className="btn rounded subBtn denyBtn ml-2"
												>
													Denied
												</button>
											)}
										</div>
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
