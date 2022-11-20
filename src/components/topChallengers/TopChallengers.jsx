import Table from "./Table";
import "./TopChallengers.css";
import { data } from "./smd";
function TopChallengers() {
	return (
		<div>
			<div className="align-items-center d-flex hero justify-content-center mt-5 pt-5">
				<div>
					<div className="container mt-5 pt-5">
						<div className="section-title mb-5 px-5">
							<h2>Challengers</h2>
							<p>
								Magnam dolores commodi suscipit. Necessitatibus
								eius consequatur ex aliquid fuga eum quidem. Sit
								sint consectetur velit. Quisquam quos quisquam
								cupiditate.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<table
					className="table table-bordered text-center"
					style={{ fontSize: "18px" }}
				>
					<thead>
						<tr>
							<th scope="col">Rank</th>
							<th scope="col">Name</th>
							<th scope="col">Points</th>
							<th scope="col">Institution</th>
						</tr>
					</thead>
					<tbody>
						{data?.map((item) => (
							// <tr>
							// 	<th scope="row">{item.rank}</th>
							// 	<td>{item.name}</td>
							// 	<td>{item.points}</td>
							// 	<td>{item.institution}</td>
							// </tr>
							<TableRow item={item} />
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
		</div>
	);
}

export default TopChallengers;

const TableRow = ({ item }) => {
	return (
		<tr>
			{item?.rank > 0 && item?.rank < 4 ? (
				<th scope="row" className="position-relative">
					<div className="badgeContainer">
						<i class="icofont-3x icofont-badge position-relative badgeIcon">
							<span>{item?.rank}</span>
						</i>
					</div>
				</th>
			) : (
				<th scope="row">{item?.rank}</th>
			)}

			<td>{item?.name}</td>
			<td>{item?.points}</td>
			<td>{item?.institution}</td>
		</tr>
	);
};
