import {Link} from 'react-router-dom';

function SideBar() {
	return (
		<>
      <div className="col-md-3 col-sm bg-uniform py-5 px-5 shadow">
        <div>
        	 <Link to="/dashboard/published">Published</Link> <br /> <hr />
          <Link to="/dashboard/reqeust-for-publish">Request For publish</Link> <br /> <hr />
          <Link to="/">Rejected</Link> <hr />
        </div>
      </div>
		</>
	)
}

export default SideBar;