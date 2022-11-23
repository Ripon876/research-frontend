function FilterButtons({c, sc}) {
	return (
		<div className="text-center">
			<div className="btn-group my-5 filterButtons">
				<button
					type="button"
					className={` mx-1 btn btn-lg btn-dark border ${
						c === "Posts" ? "activeCate" : ""
					}`}
					onClick={() => {
						sc("Posts");
					}}
				>
					Posts
				</button>
				<button
					type="button"
					className={` mx-1 btn btn-lg btn-dark border ${
						c === "Research_Requests" ? "activeCate" : ""
					}`}
					onClick={() => {
						sc("Research_Requests");
					}}
				>
					Research Requests
				</button>
				<button
					type="button"
					className={` mx-1 btn btn-lg btn-dark border ${
						c === "Publication_Requests" ? "activeCate" : ""
					}`}
					onClick={() => {
						sc("Publication_Requests");
					}}
				>
					Publication Requests
				</button>
			</div>
		</div>
	);
}

export default FilterButtons;
