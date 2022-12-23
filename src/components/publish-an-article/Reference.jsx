import { useEffect, useState, useRef } from "react";

function Reference() {
	const initialRefData = {
		title: "",
		articleLink: "",
		casLink: "",
		googleScholorLink: "",
	};

	const [refData, setRefData] = useState(initialRefData);

	const [showRefModal, setShowRefModal] = useState(true);
	const [showRef, setShowRef] = useState(false);
	const referenceRef = useRef(null);
	const removeReference = (e) => {
		referenceRef.current.remove();
	};
	const refClose = () => {
		setShowRefModal(false);
		return null;
	};

	const handleRef = (e) => {
		setRefData({
			...refData,
			[e.target.name]: e.target.value.trim(),
		});
	};
	const handleRefSubmit = () => {
		setShowRefModal(false);
		setShowRef(true);
	};

	return (
		<>
			{showRefModal && (
				<div className="align-items-center d-flex referenceModal">
					<div className="container p-5">
						<div className="text-right">
							<i
								class="icofont-2x icofont-close ml-2 closeModal"
								onClick={refClose}
							></i>
						</div>
						<div className="p-0 shadow-none">
							<div className="d-flex justify-content-center align-items-baseline mb-4">
								<h4>Add Reference</h4>
							</div>
							<div className="form-group">
								<textarea
									className="form-control"
									placeholder="Short Description"
									rows="5"
									name="title"
									onChange={handleRef}
								></textarea>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control item"
									name="articleLink"
									placeholder="Article url"
									onChange={handleRef}
								/>
							</div>
							<div className="form-group">
								<input
									type="url"
									className="form-control item"
									name="casLink"
									placeholder="CAS url"
									onChange={handleRef}
								/>
							</div>
							<div className="form-group">
								<input
									type="url"
									className="form-control item"
									name="googleScholorLink"
									placeholder="Google Scholor url"
									onChange={handleRef}
								/>
							</div>

							<div className="form-group">
								<button
									type="button"
									className="btn btn-block subBtn submit"
									onClick={handleRefSubmit}
								>
									Add
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
			{!showRefModal && showRef && (
				<div className="card  mb-3" ref={referenceRef}>
					<div className="card-body">
						<p className="mb-0">
						{refData?.title}
						{/*	1. Patch, A.-M. et al. Whole-genome characterization
							of chemoresistant ovarian cancer. Nature 521,
							489–494 (2015).*/}
						</p>
						<div className="d-flex justify-content-end">
							<a href={refData?.articleLink}>Article</a>
							<a href={refData?.casLink} className="mx-2">
								CAS
							</a>
							<a href={refData?.googleScholorLink}>Google Scholar</a>
						</div>
					</div>
					<div className="referenceOptions">
						<div
							className="removeReference"
							onClick={(e) => {
								removeReference(e);
							}}
						>
							Remove Reference <i class="icofont-delete-alt"></i>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Reference;
