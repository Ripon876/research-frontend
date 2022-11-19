import { useState } from "react";
import Institutions from "../institutions/Institutions";
import BResearchers from './bestResearchers/BResearchers';
import BInstitutions from './bestInstitutions/BInstitutions';
import { data } from "./smd";
import "./Awards.css";

function Awards() {
	const [tableDate, setTableData] = useState(data);

	const filterTable = (e) => {
		let newData = [];
		let query = e.target.value;
		if (query !== "") {
			newData = data.filter((item) => {
				return (
					item.name.includes(query) ||
					item.year.includes(query) ||
					item.award.includes(query)
				);
			});
		} else {
			newData = data;
		}
		setTableData(newData);
	};

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
				</div>
				<div className="container">
					{/*<div className="d-flex">
						<div class="form-outline mb-2 mr-3 w-100">
							<input
								type="search"
								className="form-control pl-4"
								placeholder="      Search"
								onChange={filterTable}
							/>
						</div>
						<h2 className="align-items-center d-flex m-0 mr-3">
							<i className="icofont-filter filterButton"></i>
						</h2>
					</div>*/}

					{/*<table
						className="table table-bordered text-center"
						style={{ fontSize: "18px" }}
					>
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Year</th>
								<th scope="col">Award</th>
							</tr>
						</thead>
						<tbody>
							{tableDate?.map((item) => (
								<tr>
									<th scope="row">{item.serial}</th>
									<td>{item.name}</td>
									<td>{item.year}</td>
									<td>{item.award}</td>
								</tr>
							))}
						</tbody>
					</table>*/}
					{/*<nav>
						<ul className="pagination text-dark">
							<li className="page-item">
								<a className="page-link">
									Previous
								</a>
							</li>
							<li className="page-item pageNum">
								<a className="page-link" >
									1
								</a>
							</li>
							<li className="page-item">
								<a className="page-link">
									Next
								</a>
							</li>
						</ul>
					</nav>*/}
				</div>
			</div>
		</section>
	);
}

export default Awards;
