import { data } from "./smd";

function Table() {
	return (
		<div className='container'>
			<table
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
					{data?.map((item) => (
						<tr>
							<th scope="row">{item.rank}</th>
							<td>{item.name}</td>
							<td>{item.points}</td>
							<td>{item.institution}</td>
						</tr>
					))}
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

export default Table;
