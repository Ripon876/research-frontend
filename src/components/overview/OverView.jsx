import OverviewCard from './OverviewCard';
import {projects,researches} from './smd';
import './OverView.css';

function OverView() {
	return (
		<>
		<section id="why-us" className="why-us">
		      <div className="container">
		        <div className="row">
		          <div className="col-lg-12 mt-5">
		            <div className="icon-boxes d-flex flex-column justify-content-center">
		              <div className="row">
		                {projects?.map((item,i) =>
		                   <OverviewCard item={item} count={i} />
		                )}
		              </div>
		            </div>
		          </div> 
		          <div className="col-lg-12 mt-5">
		            <div className="icon-boxes d-flex flex-column justify-content-center mt-5">
		              <div className="row">
		                {researches?.map((item,i) =>
		                   <OverviewCard item={item} count={i} />
		                )}
		              </div>
		            </div>
		          </div>
		        </div>
		    </div>
		</section>
		</>
	)
}

export default OverView;