import Content from "./content/Content";
import RelatedPosts from "./related/RelatedPosts";
import "./Blog.css";

function Blog() {
	return (
		<div className="blog mt-5">
			<div
				className="container-fluid px-4"
				style={{ naxWidth: "1600px" }}
			>
				<div className="row">
					<Content />
					<RelatedPosts />
				</div>
			</div>
		</div>
	);
}

export default Blog;
