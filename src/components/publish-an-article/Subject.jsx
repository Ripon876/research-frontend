import { useEffect, useState, useRef } from "react";

function Subject() {
	const initialsubjectData = {
		name: "",
	};

	const [subjectData, setSubjectData] = useState(initialsubjectData);

	const [showSubjectModal, setShowSubjectModal] = useState(true);
	const [showSubject, setShowSubject] = useState(false);
	const authorRef = useRef(null);
	const removeReference = (e) => {
		authorRef.current.remove();
	};
	const refClose = () => {
		setShowSubjectModal(false);
		return null;
	};

	const handleChange = (e) => {
		setSubjectData({
			...subjectData,
			[e.target.name]: e.target.value.trim(),
		});
	};
	const handleSubmit = () => {
		setShowSubjectModal(false);
		setShowSubject(true);
	};

	return (
		<>
			{showSubjectModal && (
				<div className="align-items-center d-flex referenceModal">
					<div className="container subjectModalContainer p-5">
						<div className="text-right">
							<i
								class="icofont-2x icofont-close ml-2 closeModal"
								onClick={refClose}
							></i>
						</div>
						<div className="p-0 shadow-none">
							<div className="d-flex justify-content-center align-items-baseline mb-4">
								<h4>Add Subject</h4>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control item"
									name="name"
									placeholder="Subject name"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<button
									type="button"
									className="btn btn-block subBtn submit"
									onClick={handleSubmit}
								>
									Add
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
			{!showSubjectModal && showSubject && (
				<div   ref={authorRef}>
				<div className="card  m-1">
					<div className="card-body py-2">
						<p className="mb-0">
						{subjectData?.name}
						</p>
					</div>
					<div className="referenceOptions">
						<div
							className="removeReference"
							onClick={(e) => {
								removeReference(e);
							}}
						>
						<i class="icofont-delete-alt"></i>
						</div>
					</div>
				</div>
				</div>
			)}
		</>
	);
}

export default Subject;
