import React from "react";

function Filter({ rf, func, cat }) {
	return (
		<select ref={rf} className="custom-select w-25 mb-3" onChange={func}>
			<option selected>All</option>

			{cat === "Posts" ? (
				<>
					<option value="New">New</option>
				</>
			) : (
				<>
					<option value="Review">Review</option>
					<option value="Approved">Approved</option>
					<option value="Denied">Denied</option>
				</>
			)}
		</select>
	);
}

export default Filter;
