import { data } from "./smd";

const postsReducer = (state = data, action) => {
	switch (action.type) {
		case "GET_ALL_POSTS":
			return state;
			break;

		case "GET_SINGLE_POST":
			let post = state.filter((item) => item.id === action.data.id);
			action.cb(post);
			return state;

			break;
		default:
			return state;
	}
};


export  default postsReducer;

 