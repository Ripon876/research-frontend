import Comment from "./Comment";
import "./Comments.css";

function Comments({expandedPost}) {
	return (
		<div>
			<h5 className="card-title mb-1">Comments (3)</h5>
			<div className="comments" style={{
				maxHeight : expandedPost ? '370px' : null
			}}>
				<Comment />
				<Comment />
				<Comment />
			</div>
			<div className="pt-2">
				<form className="d-flex newComment" role="search">
					<input
						className="form-control me-2 "
						type="search"
						placeholder="write your comment"
						aria-label="Search"
						 
					/>
					<button
						className="btn btn-outline-success btn-sm subBtn"
						type="submit"
					>
						Add
					</button>
				</form>
			</div>
		</div>
	
	);
}

export default Comments;
