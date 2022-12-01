import { useState, useEffect, useRef } from "react";
import FilterButtons from "./FilterButtons";
import Filter from "./Filter";
import Post from "./Post";
import Research from "./Research";
import Publication from "./Publication";
import Challenge from "./Challenge";
import { postData, researchData, publicationData, challengeData } from "./smd";

function Cards() {
	const [posts, setPosts] = useState(postData);
	const [researches, setResearches] = useState(researchData);
	const [articles, setArticles] = useState(publicationData);
	const [challenges, setChallenges] = useState(challengeData);
	const [category, setCategory] = useState("Posts");
	const selectRef = useRef();

	const filter = (e) => {
		if (category === "Posts") {
			filterData(e, postData, setPosts);
			return;
		}
		if (category === "Researches") {
			filterData(e, researchData, setResearches);
			return;
		}
		if (category === "Publications") {
			filterData(e, publicationData, setArticles);
			return;
		}
		if (category === "Challenges") {
			filterData(e, challengeData, setChallenges);
			return;
		}
	};

	const filterData = (e, data, setData) => {
		let query = e.target.value;
		if (query === "All") {
			setData(data);
		} else {
			let filteredData = data.filter((item) => item.status === query);
			setData(filteredData);
		}
	};

	useEffect(() => {
		selectRef.current.value = "All";
		if (category === "Posts") {
			setPosts(postData);
		}
		if (category === "Researches") {
			setResearches(researchData);
		}
		if (category === "Publications") {
			setArticles(publicationData);
		}
		if (category === "Challenges") {
			setChallenges(challengeData);
		}
	}, [category]);

	return (
		<div style={{ maxWidth: "1600px", margin: "auto" }} className="pb-5">
			<div className="bg-white container shadow-sm sticky-top">
				<FilterButtons c={category} sc={setCategory} />
				<Filter rf={selectRef} func={filter} cat={category} />
			</div>
			<div className="container mt-4">
				{category === "Posts" && (
					<div className="row">
						{posts?.map((post) => (
							<Post post={post} />
						))}
						{posts.length === 0 && (
							<p className="w-100 text-center">No data found</p>
						)}
					</div>
				)}
				{category === "Researches" && (
					<div className="row">
						{researches?.map((research) => (
							<Research research={research} />
						))}
						{researches.length === 0 && (
							<p className="w-100 text-center">No data found</p>
						)}
					</div>
				)}

				{category === "Publications" && (
					<div className="row">
						{articles?.map((article) => (
							<Publication article={article} />
						))}
						{articles.length === 0 && (
							<p className="w-100 text-center">No data found</p>
						)}
					</div>
				)}
				{category === "Challenges" && (
					<div className="row">
						{challenges?.map((challenge) => (
							<Challenge challenge={challenge} />
						))}
						{challenges.length === 0 && (
							<p className="w-100 text-center">No data found</p>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default Cards;
