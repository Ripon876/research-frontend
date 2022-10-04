import {Fade} from 'react-reveal';
import CountUp from 'react-countup';

function OverviewCard({item}) {
	return (
		<Fade bottom>
			<div className="col-xl-4 d-flex align-items-stretch" id="pub1">
			    <div className="icon-box mt-4 mt-xl-0">
			        <span><CountUp end={item?.count} suffix="+" duration={0.75}/></span>
			        <h4>{item?.title}</h4>
			        <p>{item?.description}</p>
			    </div>
			</div>
		</Fade>
	)
}

export default OverviewCard;