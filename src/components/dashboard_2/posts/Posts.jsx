import { useState } from "react";
import Post from "./Post";

function Posts() {
	const [category, setCategory] = useState("Posts");
	return (
		<div>
			<div className="container text-center">
				<div
					className="btn-group my-5"
					role="group"
					aria-label="Basic example"
				>
					<button
						type="button"
						className={` mx-1 btn btn-lg btn-dark border ${
							category === "Posts" ? "activeCate" : ""
						}`}
						onClick={() => {
							setCategory("Posts");
						}}
					>
						Post
					</button>
					<button
						type="button"
						className={` mx-1 btn btn-lg btn-dark border ${
							category === "Research_Requests" ? "activeCate" : ""
						}`}
						onClick={() => {
							setCategory("Research_Requests");
						}}
					>
						Research Requests
					</button>
					<button
						type="button"
						className={` mx-1 btn btn-lg btn-dark border ${
							category === "Publication_Requests" ? "activeCate" : ""
						}`}
						onClick={() => {
							setCategory("Publication_Requests");
						}}
					>
						Publication Requests
					</button>
				</div>
			</div>
		</div>
	);
}

export default Posts;
