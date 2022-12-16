import { article } from "../smd";
import Authors from "./authors/Authors";
import About from "./about/About";
import Comments from "./comments/Comments";

function ArticleContent() {
	return (
		<div className="col-md-8 pr-5">
			<div className="articleTitle">
				<h2>
					<strong>
						Ovarian cancer mutational processes drive site-specific
						immune evasion
					</strong>
				</h2>
			</div>
			<Authors authors={article?.authors} />

			<div className="articleStates d-flex mt-3">
				<p className="px-2">1765 Accesses</p>
				<p
					className="px-2"
					style={{
						borderLeft: " 2px solid black",
						borderRight: "2px solid black",
					}}
				>
					72 Altmetric
				</p>
				<p className="px-2">
					<a href="#">Metrics</a>
				</p>
			</div>

			<div className="articleContentContainer mt-4">
				{article?.contents?.map((content) => (
					<>
						{content.type === "section" ? (
							<section className="mb-4 py-0">
								<h3 className="sectionTitle border-bottom">
									{content.title}
								</h3>
								<p>{content.content}</p>
							</section>
						) : (
							<>
								<div className="card pt-4 px-3 mb-4">
									<h6>
										<strong>
											Fig {content.figNum}:{" "}
											{content.title}
										</strong>
									</h6>
									<img
										src={content.image}
										className="img-fluid card-img-top mb-2"
									/>
									<p>{content.content}</p>
								</div>
							</>
						)}
					</>
				))}
			</div>
			<About />
			<Comments />
		</div>
	);
}

export default ArticleContent;
