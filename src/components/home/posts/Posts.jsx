import { data } from "./smd";
import Post from "./Post";

function Posts() {
	return (
		<div>
			{data?.map((post, i) => (
				<Post post={post} i={i+1} />
			))}

			{/*<Post i={1} />
			<Post i={2} />
			<Post i={3} />
			<Post i={4} />
			<Post i={5} />*/}
		</div>
	);
}

export default Posts;


// Ripon01765233876@