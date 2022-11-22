import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

function Post() {
	return (
		<Fade>
			<div className="col-md-4 mb-4">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">
							Lorem ipsum dolor sit amet, consectetur
						</h5>
						<h6 className="card-subtitle mb-2 text-muted">
							tag1 , tag2 , tag3
						</h6>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<Link to="/challenge/sdf34543df4/">See Details</Link>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default Post;
