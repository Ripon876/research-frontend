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
						c === "Researches" ? "activeCate" : ""
					}`}
					onClick={() => {
						sc("Researches");
					}}
				>
					Researches
				</button>
				<button
					type="button"
					className={` mx-1 btn btn-lg btn-dark border ${
						c === "Publications" ? "activeCate" : ""
					}`}
					onClick={() => {
						sc("Publications");
					}}
				>
					Publications
				</button>
				<button
					type="button"
					className={` mx-1 btn btn-lg btn-dark border ${
						c === "Challenges" ? "activeCate" : ""
					}`}
					onClick={() => {
						sc("Challenges");
					}}
				>
					Challenges
				</button>
			</div>
		</div>
	);
}

export default FilterButtons;
