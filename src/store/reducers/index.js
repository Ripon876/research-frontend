import { combineReducers } from "redux";
import userReducer from "./user";
import postsReducer from "./posts/posts";

const rootReducer = combineReducers({ user: userReducer , posts: postsReducer});

export default rootReducer;
