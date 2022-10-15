import {Link} from 'react-router-dom';
import {researches} from './researches';


function PublishedResearch() {
	return (
	        <div className="container">
		        <div className="section-title">
		          <h2>Published</h2>
		        </div>
		        <div className="row">
					    {researches?.map((research)=> 
						    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" id="shadow">
						        <div className="icon-box">
						            <h4><Link to={'/dashboard/user/view-research?id=' + Math.floor(Math.random() * 999)} style={{color: '#212529',fontWeight: 600}}>{research.title}</Link></h4>
						            <span className="font-weight-bold"><i>Author: {research.author}</i></span>
						            <p>{research.description}</p>
						        </div>
						    </div>
					    )}
		        </div>
          </div>
	)
}

export default PublishedResearch;