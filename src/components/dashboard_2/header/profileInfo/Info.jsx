import States from "../states/States";

function Info() {
	return (
		<div className="col-md-8">
			<div className="row mt-4">
				<div className="col-md-4">
					<div className="pIC text-center">
						<img
							src="https://via.placeholder.com/200x200"
							className="img-fluid rounded-circle"
						/>
					</div>
					<div className="pNC">
						<h2 className="mt-2 mb-0 text-center">Jhone Doe</h2>
						<h4 className="text-center text-secondary">
							Jhone Doe
						</h4>
					</div>
				</div>
				<States />
			</div>
		</div>
	);
}

export default Info;
