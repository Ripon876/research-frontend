import {Link} from 'react-router-dom';

function SideBar({userType}) {
	return (
		<>
      <div className="col-md-3 col-sm bg-uniform py-5 px-5 shadow" style={{height: '100vh'}}>
        <div>

        {userType === 'user' ? 
         <>
          <Link to="/dashboard/user/published">Published</Link> <br /> <hr />
          <Link to="/dashboard/user/reqeust-for-publish">Request For publish</Link> <br /> <hr />
          <Link to="/">Rejected</Link> <hr />
         </> 
        :
         <>
          <Link to="/dashboard/moderator/published">Published</Link> <br /> <hr />
          <Link to="/dashboard/moderator/reqeust-for-publish">Requests For publish</Link> <br /> <hr />
          <Link to="/">Rejected</Link> <hr />
         </>
        }



        
        </div>
      </div>
		</>
	)
}

export default SideBar;