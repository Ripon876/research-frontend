import "./Article.css";
import { article } from "./smd";
import { useState } from "react";

function Article() {
	const [showAllAuthors, setSAA] = useState(false);

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
						<div className="col-md-8 pr-5">
							<div className="articleTitle">
								<h2>
									<strong>
										Ovarian cancer mutational processes
										drive site-specific immune evasion
									</strong>
								</h2>
							</div>
							<div className="articleAuthors">
								{article.length > 25 ? (
									<>
										{article?.authors
											?.slice(0, 24)
											?.map((author) => (
												<a
													href="#"
													className="mr-2"
													style={{
														textDecoration:
															"underline",
													}}
												>
													{author?.name}
												</a>
											))}
									</>
								) : (
									<>
										{article?.authors?.map((author) => (
											<a
												href="#"
												className="mr-2"
												style={{
													textDecoration: "underline",
												}}
											>
												{author?.name}
											</a>
										))}
									</>
								)}

								{!showAllAuthors && (
									<button className="btn btn-dark seeMoreAuthor rounded-pill">
										<i className="icofont-long-arrow-left pr-2"></i>
										{!showAllAuthors
											? "Show Fewer Authors"
											: "Show All Authros"}
									</button>
								)}
							</div>

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
															Fig {content.figNum}
															: {content.title}
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

							<div className="aboutArticle">
								<h3>
									<strong>About this article</strong>
								</h3>

								<div className="border-top">
									<div className="border-left ml-5 pl-4 pt-3">
										<h3>Cite this article</h3>
										<p>
											Vázquez-García, I., Uhlitz, F.,
											Ceglia, N. et al. Ovarian cancer
											mutational processes drive
											site-specific immune evasion. Nature
											(2022).
											https://doi.org/10.1038/s41586-022-05496-1
										</p>
										<a href="#">
											Download citation
											<i className="icofont-download pr-2"></i>
										</a>
										<div className="row">
											<div className="col-md-4">
												<p>Received</p>
												<p>20 September 2021</p>
											</div>
											<div className="col-md-4">
												<p>Accepted</p>
												<p>28 October 2022</p>
											</div>
											<div className="col-md-4">
												<p>Published</p>
												<p>14 December 2022</p>
											</div>
										</div>
										<p>DOI</p>
										<p>
											https://doi.org/10.1038/s41586-022-05496-1Cite
											this article
										</p>
										<h3 className="mb-0">
											Share this article
										</h3>
										<p>
											Anyone you share the following link
											with will be able to read this
											content:
										</p>
										<button className="border-info text-info px-4 py-2 bg-white">
											Get Sharable Link
										</button>
										<p>
											Provided by the Springer Nature
											SharedIt content-sharing initiative
										</p>
										<h3 className="mb-0">Subjects</h3>
										<div className="subjects mb-5 mt-3">
											<span className="border border-info bg-info-50 font-weight-bold px-2 py-2 rounded-pill text-info mr-3">
												Cancer genomics
											</span>
											<span className="border border-info bg-info-50 font-weight-bold px-2 py-2 rounded-pill text-info mr-3">
												Cancer genomics
											</span>
											<span className="border border-info bg-info-50 font-weight-bold px-2 py-2 rounded-pill text-info mr-3">
												Cancer genomics
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className="articleclassName=">
								<h3>
									<strong>Comments</strong>
								</h3>
								<div className="border-top">
									<p>
										By submitting a comment you agree to
										abide by our Terms and Community
										Guidelines. If you find something
										abusive or that does not comply with our
										terms or guidelines please flag it as
										inappropriate.
									</p>
									<div className='mb-4'>
										<p>
											<strong>2  Comments</strong>
										</p>
										<div className="py-3 border-0">
											<div className="d-flex flex-start w-100">
												<img
													className="rounded-circle shadow-1-strong me-3"
													src="https://via.placeholder.com/75x75"
													alt="avatar"
													width="90"
													height="90"
												/>
												<div className="form-outline w-100 ml-4">
													<textarea
														className="form-control"
														id="commentInput"
														placeholder="Start the discussion"
														rows="4"
													></textarea>

													<div className="mt-2 pt-1 text-right">
												<button
													type="button"
													className="btn btn-info btn-sm font-weight-bold px-3 rounded-pill"
													style={{
														backgroundColor:
															"#006699",
													}}
												>
													Comment
												</button>
											</div>



<div className="d-flex flex-start mt-4 mb-3">
											<a className="me-3" href="#">
												<img
													className="rounded-circle shadow-1-strong"
													src="https://via.placeholder.com/50x50"
													width="50"
													height="50"
												/>
											</a>
											<div className="flex-grow-1 flex-shrink-1 ml-3">
												<div>
													<div className="d-flex justify-content-between align-items-center">
														<p className="mb-1">
															Simona Disa{" "}
															<span className="small">
																- 3 hours ago
															</span>
														</p>
													</div>
													<p className="small mb-0">
														letters, as opposed to
														using 'Content here,
														content here', making it
														look like readable
														English.letters, as opposed to
														using 'Content here,
														content here', making it
														look like readable
														English.
													</p>
												</div>
											</div>
										</div>
										<div className="d-flex flex-start mt-4 mb-3">
											<a className="me-3" href="#">
												<img
													className="rounded-circle shadow-1-strong"
													src="https://via.placeholder.com/50x50"
													width="50"
													height="50"
												/>
											</a>
											<div className="flex-grow-1 flex-shrink-1 ml-3">
												<div>
													<div className="d-flex justify-content-between align-items-center">
														<p className="mb-1">
															Simona Disa{" "}
															<span className="small">
																- 3 hours ago
															</span>
														</p>
													</div>
													<p className="small mb-0">
														letters, as opposed to
														using 'Content here,
														content here', making it
														content here', making it
														content herre', making it
														content herre', making it
														content here', making it
														look like readable
														English.
													</p>
												</div>
											</div>
										</div>

												</div>
											</div>
											
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Article;
