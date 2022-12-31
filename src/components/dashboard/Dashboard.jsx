import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import M_Dashboard from "./moderator/Dashboard";
import R_Dashboard from "./researcher/Dashboard";
import U_Dashboard from "./user/Dashboard";

function Dashboard() {
	const { type } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (type === "moderator") {
			dispatch({
				type: "SET_USER",
				user: {
					name: "Mark",
					username: "mark",
					type: "Moderator",
				},
			});
		} else if (type === "researcher") {
			dispatch({
				type: "SET_USER",
				user: {
					name: "Peter",
					username: "peter",
					type: "Researcher",
				},
			});
		} else {
			dispatch({
				type: "SET_USER",
				user: {
					name: "Jhon",
					username: "jhon",
					type: "User",
				},
			});
		}
	}, []);
	return (
		<div>
			{type === "moderator" ? (
				<M_Dashboard />
			) : type === "researcher" ? (
				<R_Dashboard />
			) : (
				<U_Dashboard />
			)}
		</div>
	);
}

export default Dashboard;
