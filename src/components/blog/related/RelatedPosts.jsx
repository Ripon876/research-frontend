import Post from "./Post";

function RelatedPosts() {
	return (
		<div className="col-md-3 mt-5 pt-5 px-4">
			<div className="sticky-top" style={{ top: "120px" }}>
				<h3>Related Blogs</h3>
				<div>
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
}

export default RelatedPosts;
