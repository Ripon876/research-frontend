import Comment from "./Comment";

function Comments() {
	return (
		<div
			style={{
				height: "60vh",
				overflowY: "scroll",
			}}
			className='pb-4'
		>
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
		</div>
	);
}

export default Comments;
