import React from "react";

function TableRow({ data }) {
	return (
		<tr>
			<th scope="row">{data?.year}</th>
			<td className="p-0">
				<table class="table m-0">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Best Researchers</th>
						</tr>
					</thead>
					<tbody>
						{data?.best_researchers?.map((researcher) => (
							<tr>
								<th scope="row">{researcher?.position}</th>
								<td>{researcher?.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</td>
			<td className="p-0">
				<table class="table m-0">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Best Institutions</th>
						</tr>
					</thead>
					<tbody>
						{data?.best_institutions?.map((institution) => (
							<tr>
								<th scope="row">{institution?.position}</th>
								<td>{institution?.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</td>
		</tr>
	);
}

export default TableRow;
