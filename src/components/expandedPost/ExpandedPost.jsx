import { useState, useEffect } from "react";
import { useNavigate,useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostMedia from "./media/PostMedia";
import PostContent from "./content/PostContent";
import "./ExpandedPost.css";

function ExpandedPost() {

	const {id} = useParams();
	const post = useSelector((state) =>
		state.posts.filter((post) => post.id === id)
	);
console.log(post[0])
const navigate = useNavigate();
const goBack = () =>{
	 navigate(-1);
}





	return (
		<div>
			<div className="container-fluid expandedPostContainer">
				<div className="row"  style={{  background: 'rgb(21 21 21)'}}>
					<div className="col-md-8 col-sm-12" style={{   height: '100vh'}}>
						<div className="closePostButtonContainer" onClick={goBack} >
				          <i class="icofont-close"></i>
			             </div>
						<PostMedia data={post[0]?.attachments} />
					</div>
					<div className="col-md-4 col-sm-12 bg-white">
						<PostContent post={post[0]}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExpandedPost;
