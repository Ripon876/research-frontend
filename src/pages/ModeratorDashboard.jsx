import Profile from '../components/dashboard/moderator/profile/Profile';
import Requests from '../components/dashboard/moderator/research-requests/Requests';
import Header from '../components/dashboard/navigation/Header';
import SideBar from '../components/dashboard/navigation/SideBar';
import {useParams} from 'react-router-dom';



function ModeratorDashboard(){

	const {page} = useParams();

	return (
        <div>
			<Header userType='moderator' />
			<section className="dashboard mt-4"  id="dashboard">
		        <div className="row">
		            <SideBar userType='moderator' />
		            <div className="col-md-9 py-5">
			   		   {page == 'profile' && <Profile />}
			   		   {page == 'requests' && <Requests />}
		            </div>
		        </div>
			</section>
		</div>
		)
}


export default ModeratorDashboard;