import Institutions from "../institutions/Institutions";
import BResearchers from './bestResearchers/BResearchers';
import BInstitutions from './bestInstitutions/BInstitutions';
import AwardTable from './awardTable/AwardTable';
import "./Awards.css";

function Awards() {
	

	return (
		<section>
			<div className="container mt-5 pt-5">
				<div className="section-title mb-2 mt-5">
					<h2>Awards</h2>
					<p>
						Magnam dolores commodi suscipit. Necessitatibus eius
						consequatur ex aliquid fuga eum quidem. Sit sint
						consectetur velit. Quisquam quos quisquam cupiditate. Et
						nemo qui impedit suscipit alias ea. Quia fugiat sit in
						iste officiis commodi quidem hic quas.
					</p>
				</div>
				<div className="container">
					<BResearchers />
					<BInstitutions />
					<AwardTable />
				</div>
			</div>
		</section>
	);
}

export default Awards;
