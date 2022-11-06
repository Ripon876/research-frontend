import {Link} from 'react-router-dom';
import "./Category.css";

function Category() {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-7 mx-auto">
					<ul className="timeline">
						<li className="timeline-item bg-white rounded ml-3 p-4 shadow">
							<div className="timeline-arrow"></div>
							<h2 className="h5 mb-0"><Link to='/be-a-researcher'>Request to be a researcher</Link></h2>
						</li>
						<li className="timeline-item bg-white rounded ml-3 p-4 shadow">
							<div className="timeline-arrow"></div>
							<h2 className="h5 mb-0"><Link to='/research-my-problem'>Request for a solution</Link></h2>

						</li>
						<li className="timeline-item bg-white rounded ml-3 p-4 shadow">
							<div className="timeline-arrow"></div>
							<h2 className="h5 mb-0"><Link to='publication-request'>Request to publish your work</Link></h2>

						</li>
						<li className="timeline-item bg-white rounded ml-3 p-4 shadow">
							<div className="timeline-arrow"></div>
							<h2 className="h5 mb-0"><Link to='/'>Research partner requirment</Link></h2>
						</li>
						<li className="timeline-item bg-white rounded ml-3 p-4 shadow">
							<div className="timeline-arrow"></div>
							<h2 className="h5 mb-0"><Link to='/apply/internship'><b>Apply for internship</b></Link></h2>
						</li>
						<li className="timeline-item bg-white rounded ml-3 p-4 shadow">
							<div className="timeline-arrow"></div>
							<h2 className="h5 mb-0"><Link to='/apply/work'><b>Apply for Work</b></Link></h2>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Category;
