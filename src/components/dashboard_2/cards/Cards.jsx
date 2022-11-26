import { useState, useEffect, useRef } from "react";
import FilterButtons from "./FilterButtons";
import Post from "./Post";
import Research from "./Research";
import Publication from "./Publication";
import { postData, researchData, articleData } from "./smd";

function Cards() {
	const [posts, setPosts] = useState(postData);
	const [researches, setResearches] = useState(researchData);
	const [articles, setArticles] = useState(articleData);
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
			filterData(e, articleData, setArticles);
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
			setArticles(articleData);
		}
	}, [category]);

	return (
		<div style={{ maxWidth: "1600px", margin: "auto" }}>
			<div className="bg-white container shadow-sm sticky-top">
				<FilterButtons c={category} sc={setCategory} />
				<select
					ref={selectRef}
					className="custom-select w-25 mb-3"
					onChange={filter}
				>
					<option selected>All</option>
					<option value="Review">Review</option>
					<option value="Approved">Approved</option>
					<option value="Denied">Denied</option>
				</select>
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
			</div>
		</div>
	);
}

export default Cards;
