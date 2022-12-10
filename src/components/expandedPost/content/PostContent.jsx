import { useState, useEffect } from "react";
import Moment from "react-moment";
import Options from './Options';
import Comments from './comments/Comments';

function PostContent({post}) {


	const [isExpanded, setIsExpanded] = useState(false);
	const expandPost = () => {
		setIsExpanded(true);
	};

	return (
		<div>
			<div className="card">
				<div className="card-body">
					<div className="d-flex justify-content-between mb-2">
						<div className="align-items-center d-flex">
							<div className="mr-3">
								<img
									src={post?.creator.image}
									className="img-fluid rounded-circle"
								/>
							</div>
							<div>
								<h4 className="card-title mb-1">{post?.creator.full_name}</h4>
								<h6 className="card-subtitle mb-2 text-muted">
									{post?.creator.designation}
								</h6>
							</div>
						</div>
						<div className="p-1">
							<h6 className="card-subtitle mb-2 text-muted">
								<Moment fromNow>{post?.creation_date}</Moment>
							</h6>
						</div>
					</div>
					<div className="postContent">
						<div>
							<p className="card-text">
								{post?.content.length > 270 && !isExpanded ? (
									<>
										<p>
											{post?.content.substr(0, 270)}{" "}
											<span className="cp">
												<strong onClick={expandPost}>
													. . . See More
												</strong>
											</span>
										</p>
									</>
								) : (
									<p>{post?.content}</p>
								)}
							</p>
						</div>
					</div>
					<Options />
				</div>
			</div>

			<div className='pt-2 pb-4'>
				<Comments expandedPost/>
			</div>
		</div>
	);
}

export default PostContent;
