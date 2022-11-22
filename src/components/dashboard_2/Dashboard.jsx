import {useParams} from 'react-router-dom';
import MDashboard from './moderator/Dashboard';
import RDashboard from './researcher/Dashboard';

function Dashboard() {
	const {type} = useParams();


	console.log(type);
	return (
		<div>
			{/*{type === 'moderator' ? 
				
				: 
				<RDashboard />
		    }*/}
		<MDashboard />
		</div>
	)
}

export default Dashboard;