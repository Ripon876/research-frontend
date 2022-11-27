import { Link } from "react-router-dom";
import {list} from './smd';
import "./Category.css";

function Category() {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-7 mx-auto">
					<ul className="timeline">
						{list?.map((item) => (
							<li className="timeline-item bg-white rounded ml-3 p-4 shadow">
								<div className="timeline-arrow"></div>
								<h2 className="h5 mb-0">
									<Link to={item?.route}>
										<b>{item?.title}</b>
									</Link>
								</h2>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Category;
