import { institutions } from "./smd";
import Institution from "./Institution";


function BInstitutions() {
	return (
		<div>
			<div className="container mt-4">
				<h4 className="font-weight-bold my-4">
					Best Institutions In 2022
				</h4>
				<div className="row">
					{institutions?.map((item) => (
						<Institution institution={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default BInstitutions;
