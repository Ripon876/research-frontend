import { useState } from "react";
import { Fade } from "react-reveal";
import Moment from "react-moment";
import Modal from "../modal/Modal";
import "./Post.css";

function Post({ post }) {
	const [show, setShow] = useState(false);
	const [data, setData] = useState({
		type: "Post",
		id: post.id,
		data: post,
	});
	return (
		<div className="col-md-4 mb-4">
			{show && <Modal data={data} view={setShow} />}
			<Fade>
				<div className="card">
					<div
						className="card-body"
						style={{
							boxShadow: "0 0.25rem 0.75rem rgb(0 0 0 / 10%)",
							minHeight: "230px",
						}}
					>
						<h5 className="card-title">
							{post?.title.substr(0, 50)}. . .
							{post.status === "New" && (
								<span className="ml-2 badge badge-secondary">
									{post?.status}
								</span>
							)}
						</h5>
						<p className="card-text">
							{post?.description.substr(0, 100)} . . .
						</p>
						<div className="d-flex justify-content-between">
							<p
								style={{ cursor: "pointer" }}
								onClick={() => {
									setShow(true);
								}}
							>
								See More
							</p>
							<p>
								<Moment fromNow>{post?.date}</Moment>
							</p>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default Post;
