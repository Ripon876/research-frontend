import { useParams } from "react-router-dom";
import M_Dashboard from "./moderator/Dashboard";
import R_Dashboard from "./researcher/Dashboard";

function Dashboard() {
	const { type } = useParams();

	return (
		<div>{type === "moderator " ? <M_Dashboard /> : <R_Dashboard />}</div>
	);
}

export default Dashboard;
