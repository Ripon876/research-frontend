import PublishedResearch from '../components/dashboard/published-research/PublishedResearch';
import RequestForPublish from '../components/dashboard/request-for-publish/RequestForPublish';
import ViewResearch from '../components/dashboard/view-research/ViewResearch';
import {useParams} from 'react-router-dom';


function DashBoard() {
	const {page} = useParams();
	return (
		<div>
			{page == 'published' && <PublishedResearch />}
			{page == 'reqeust-for-publish' && <RequestForPublish />}
			{page == 'view-research' && <ViewResearch />}
		</div>
	)
}

export default DashBoard;