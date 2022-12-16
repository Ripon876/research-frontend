import ArticleContent from "./content/ArticleContent";
import SideBar from "./sidebar/SideBar";
import "./Article.css";
import { article } from "./smd";

function Article() {
	return (
		<div className="articleContainer">
			<div className="container-fluid" style={{ naxWidth: "1200px" }}>
				<div className="articleHeader">
					<div className="articleStates d-flex">
						<p className="px-2">Article</p>
						<p
							className="px-2"
							style={{
								borderLeft: " 2px solid black",
								borderRight: "2px solid black",
							}}
						>
							Open Access
						</p>
						<p className="px-2">Published: 14 December 2022</p>
					</div>

					<div className="row">
						<ArticleContent />
						<SideBar />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Article;
