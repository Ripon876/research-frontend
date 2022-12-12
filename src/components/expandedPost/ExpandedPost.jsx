import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import PostMedia from "./media/PostMedia";
import PostContent from "./content/PostContent";
import "./ExpandedPost.css";

function ExpandedPost() {
	const { id } = useParams();
	const post = useSelector((state) =>
		state.posts.filter((post) => post.id === id)
	);

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<>
			<Helmet>
				<title>{`${post[0]?.content.substr(0,50)} . . . `}</title>
				<meta
					property="og:url"
					content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
				/>
				<meta property="og:type" content="article" />
				<meta
					property="og:title"
					content="When Great Minds Don’t Think Alike"
				/>
				<meta name="description" 	content="How much does culture influence creative thinking?" />
				<meta
					property="og:description"
					content="How much does culture influence creative thinking?"
				/>

				<meta
					property="og:image"
					content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
				/>	
				<meta
					property="og:image"
					content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
				/>
			</Helmet>
			<div style={{ background: "#151515" }}>
				<div className="container-fluid expandedPostContainer">
					<div
						className="row"
						style={{ background: "rgb(21 21 21)" }}
					>
						<div
							className="col-md-8 col-sm-12"
							style={{ height: "100vh" }}
						>
							<div
								className="closePostButtonContainer"
								onClick={goBack}
							>
								<i class="icofont-close"></i>
							</div>
							<PostMedia data={post[0]?.attachments} />
						</div>
						<div className="col-md-4 col-sm-12 bg-white">
							<PostContent post={post[0]} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ExpandedPost;
