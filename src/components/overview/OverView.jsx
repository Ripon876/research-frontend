import OverviewCard from './OverviewCard';
import {smd} from './smd';
import './OverView.css';

function OverView() {
	return (
		<>
		<section id="why-us" className="why-us">
		      <div className="container">
		        <div className="row">
		          <div className="col-lg-12 d-flex align-items-stretch">
		            <div className="icon-boxes d-flex flex-column justify-content-center">
		              <div className="row">
		                {smd?.map((item) =>
		                   <OverviewCard item={item} />
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