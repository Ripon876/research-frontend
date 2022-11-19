import { researchers } from "./smd";
import Researcher from "./Researcher";

function BResearchers() {
	return (
		<div>
			<div className="container mt-4">
				<h4 className="font-weight-bold my-4">
					Best Researchers In 2022
				</h4>
				<div className="row">
					{researchers?.map((item) => (
						<Researcher researcher={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default BResearchers;
