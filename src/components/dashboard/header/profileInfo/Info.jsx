import { useSelector } from "react-redux";
import States from "../states/States";

function Info() {
	const user = useSelector((state) => state.user);

	return (
		<div className="col-md-8">
			<div className="row mt-4">
				<div className="col-md-4">
					<div
						className="pIC text-center"
						style={{ width: "250px", height: "250px" }}
					>
						<img
							src={
								user?.profilePic
									? user?.profilePic
									: "https://via.placeholder.com/200x200"
							}
							className="img-fluid rounded-circle w-100 h-100"
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="pNC">
						<h2 className="mt-2 mb-0 text-center">{user?.name}</h2>
						<h4 className="text-center text-secondary">
							{user?.type !== "User" && user?.type}
						</h4>
					</div>
				</div>
				<States />
			</div>
		</div>
	);
}

export default Info;
