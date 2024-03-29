import { useState } from "react";
import TableRow from './TableRow';
import { data } from "./smd";


function AwardTable() {
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
		<div>
			<div className="d-flex mt-5 py-5">
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
			</div>
			<table
				className="table table-bordered text-center"
				style={{ fontSize: "18px" }}
			>
				<thead>
					<tr>
						<th scope="col">Year</th>
						<th scope="col" colSpan="3">
							Results
						</th>
					</tr>
				</thead>
				<tbody>
				{data?.map((row) =>
					<TableRow data={row} />
				)}
				</tbody>
			</table>
			<nav>
				<ul className="pagination text-dark">
					<li className="page-item">
						<a className="page-link">Previous</a>
					</li>
					<li className="page-item pageNum">
						<a className="page-link">1</a>
					</li>
					<li className="page-item">
						<a className="page-link">Next</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default AwardTable;
