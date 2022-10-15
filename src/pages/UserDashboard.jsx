import Profile from '../components/dashboard/user/profile/Profile';
import Settings from '../components/dashboard/user/settings/Settings';
import PublishedResearch from '../components/dashboard/user/published-research/PublishedResearch';
import RequestForPublish from '../components/dashboard/user/request-for-publish/RequestForPublish';
import ViewResearch from '../components/dashboard/user/view-research/ViewResearch';
import Header from '../components/dashboard/navigation/Header';
import SideBar from '../components/dashboard/navigation/SideBar';
import {useParams} from 'react-router-dom';



function UserDashboard(){

	const {page} = useParams();

	return (
        <div>
			<Header userType='user' />
			<section className="dashboard mt-4"  id="dashboard">
		        <div className="row"  style={{background : '#0e141e'}}>
		            <SideBar userType='user' />
		            <div className="col-md-9 py-5  main-panel">
						{page == 'published' && <PublishedResearch />}
						{page == 'reqeust-for-publish' && <RequestForPublish />}
						{page == 'view-research' && <ViewResearch />}
						{page == 'profile' && <Profile />}
						{page == 'settings' && <Settings />}
		            </div>
		        </div>
			</section>
		</div>
		)
}

export default UserDashboard;