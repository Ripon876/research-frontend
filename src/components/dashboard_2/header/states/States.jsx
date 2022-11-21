import State from "./State";

function States() {
	return (
		<div className="align-items-center col-md-8 d-flex">
			<div>
				<div className="states pl-4">
					<h4 className="mb-0  text-secondary">States</h4>
					<div className="row justify-content-center">
						<State />
						<State />
						<State />
						<State />
						<State />
					</div>
				</div>
			</div>
		</div>
	);
}

export default States;
