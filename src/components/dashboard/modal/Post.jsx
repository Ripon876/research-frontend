import React from "react";

function Post({post}) {
	console.log(post)
	return (
		<div className='pt-3' style={{overflowY: 'scroll',height: '85%',boxShadow: 'inset -20px 0rem 1rem rgb(0 0 0 / 15%) !important'}}>
			<h5 className="mb-0">{post?.title}</h5>
			<div className='py-3'>
				<div>
					<p>
						{post?.description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Post;
