import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import M_Dashboard from "./moderator/Dashboard";
import R_Dashboard from "./researcher/Dashboard";

function Dashboard() {
	const { type } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (type === "moderator") {
			dispatch({
				type: "SET_USER",
				user: {
					name: "Mark",
					username: 'mark',
					type: "Moderator",
				},
			});
		} else {
			dispatch({
				type: "SET_USER",
				user: {
					name: "Peter",
					username: 'peter'
					type: "Researcher",
				},
			});
		}
	}, []);
	return (
		<div>{type === "moderator" ? <M_Dashboard /> : <R_Dashboard />}</div>
	);
}

export default Dashboard;
