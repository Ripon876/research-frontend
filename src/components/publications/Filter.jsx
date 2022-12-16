import React from "react";

function Filter() {
	return (
		<div className='researchesFilter'>
			<div
				className="p-4 shadow-4 rounded-3 row mb-4"
				style={{ backgroundColor: "#f0f0f0b3" }}
			>
				<div className="col-6 d-flex">
					<div className="w-50">
						<h6>
							<strong>Article Type</strong>
						</h6>
						<select className="custom-select w-100 mb-3">
							<option selected>All</option>
							<option value="Research_highlight_(2086)">
								Research Highlight (2086)
							</option>
						</select>
					</div>

					<div className="w-50 ml-3">
						<h6>
							<strong>Year</strong>
						</h6>
						<select className="custom-select w-100 mb-3">
							<option selected>All</option>
							<option value="2022">2022 (345)</option>
							<option value="2021">2021 (350)</option>
							<option value="2020">2020 (239)</option>
							<option value="2019">2019 (351)</option>
							<option value="2018">2018 (432)</option>
							<option value="2017">2017 (364)</option>
							<option value="2016">2016 (5)</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Filter;
