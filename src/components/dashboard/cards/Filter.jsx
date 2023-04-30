import React from "react";

function Filter({ rf, func, cat }) {
	return (
		<select ref={rf} className="custom-select w-25 mb-3" onChange={func}>
			<option selected>All</option>

			{cat === "Posts" ? (
				<>
					<option value="New">New</option>
				</>
			) : cat === "Researches" ? (
				<>
					<option value="Loading">Pending</option>
					<option value="Approved">Approved</option>
					<option value="Denied">Denied</option>
				</>
			) : (
				<>
					<option value="Review">Reivew</option>
					<option value="Approved">Approved</option>
					<option value="Denied">Denied</option>
				</>
			)}
		</select>
	);
}

export default Filter;
