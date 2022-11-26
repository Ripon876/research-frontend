import React from "react";

function Challenge({challenge}) {
	return (
		<div
			className="pt-3"
			style={{
				overflowY: "scroll",
				height: "85%",
				boxShadow: "inset -20px 0rem 1rem rgb(0 0 0 / 15%) !important",
			}}
		>
			<h5 className="mb-0">{challenge?.title}</h5>
			<div className="py-3">
				<div>
					<p>{challenge?.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Challenge;
