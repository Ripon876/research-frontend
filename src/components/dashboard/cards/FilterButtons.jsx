import { useState, useEffect } from "react";
import { postData, researchData, publicationData, challengeData } from "./smd";

function FilterButtons({ c, sc }) {
	const [newItemAvail, setNewItemAvail] = useState({
		posts: false,
		researches: false,
		publications: false,
		challenges: false,
	});

	const checkNewItem = (data) => {
		return data.some((item) => item?.isNew === true);
	};

	useEffect(() => {
		setNewItemAvail({
			...newItemAvail,
			posts: checkNewItem(postData),
			researches: checkNewItem(researchData),
			publications: checkNewItem(publicationData),
			challenges: checkNewItem(challengeData),
		});
	}, []);

	return (
		<div className="text-center">
			<div className="btn-group my-5 filterButtons">
				<button
					type="button"
					className={` mx-1 btn btn-lg btn-dark border ${
						c === "Posts" ? "selectedCat" : ""
					}  ${
						newItemAvail.posts ? "newItemAvail" : ""
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
						c === "Researches" ? "selectedCat" : ""
					} ${
						newItemAvail.researches ? "newItemAvail" : ""
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
						c === "Publications" ? "selectedCat" : ""
					} ${
						newItemAvail.publications ? "newItemAvail" : ""
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
						c === "Challenges" ? "selectedCat" : ""
					} ${
						newItemAvail.challenges ? "newItemAvail" : ""
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
