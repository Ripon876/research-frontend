// import { data } from "./smd";
import {useSelector} from 'react-redux';
import Post from "./Post";

function Posts() {

const posts = useSelector((state) => state.posts )

	return (
		<div>
			{posts?.map((post, i) => (
				<Post post={post} i={i+1} />
			))}

	
		</div>
	);
}

export default Posts;

