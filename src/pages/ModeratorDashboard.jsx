import Profile from '../components/dashboard/moderator/profile/Profile';
import Requests from '../components/dashboard/moderator/research-requests/Requests';
import Settings from '../components/dashboard/moderator/settings/Settings';
import Dashboard from '../components/dashboard/moderator/dashboard/Dashboard';
import ViewRequest from '../components/dashboard/moderator/view-request/ViewRequest';
import Header from '../components/dashboard/navigation/Header';
import SideBar from '../components/dashboard/navigation/SideBar';
import {useParams} from 'react-router-dom';



function ModeratorDashboard(){

	const {page,id} = useParams();

	return (
        <div>
			<Header userType='moderator' />
			<section className="dashboard mt-4"  id="dashboard">
		        <div className="row" style={{background : '#0e141e'}}>
		            <SideBar userType='moderator' />
		            <div className="col-md-9 py-5 main-panel">
		            { !id && page ? 
		            	<>
			               {page == 'profile' && <Profile />}
				   		   {page == 'requests' && <Requests />}
				   		   {page == 'settings' && <Settings />}
		            	</> 
		            	: 
		               id && page ?
		            	<>
		            		<ViewRequest />
		            	</>
		            	:
		            	<> 
		            		<Dashboard />
		            	</>
		            }
			   		   
			   		   
		            </div>
		        </div>
			</section>
		</div>
		)
}


export default ModeratorDashboard;