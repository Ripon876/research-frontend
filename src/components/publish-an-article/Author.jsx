import { useEffect, useState, useRef } from "react";

function Author() {
	const initialauthorData = {
		name: "",
		info: "",
	};

	const [authorData, setauthorData] = useState(initialauthorData);

	const [showAuthorModal, setShowAuthorModal] = useState(true);
	const [showAuthor, setshowAuthor] = useState(false);
	const authorRef = useRef(null);
	const removeReference = (e) => {
		authorRef.current.remove();
	};
	const refClose = () => {
		setShowAuthorModal(false);
		return null;
	};

	const handleChange = (e) => {
		setauthorData({
			...authorData,
			[e.target.name]: e.target.value.trim(),
		});
	};
	const handleSubmit = () => {
		setShowAuthorModal(false);
		setshowAuthor(true);
	};

	return (
		<>
			{showAuthorModal && (
				<div className="align-items-center d-flex referenceModal">
					<div className="container authorModalContainer p-5">
						<div className="text-right">
							<i
								class="icofont-2x icofont-close ml-2 closeModal"
								onClick={refClose}
							></i>
						</div>
						<div className="p-0 shadow-none">
							<div className="d-flex justify-content-center align-items-baseline mb-4">
								<h4>Add Author</h4>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control item"
									name="name"
									placeholder="Author name"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<textarea
									className="form-control"
									placeholder="Short Description"
									rows="5"
									name="info"
									onChange={handleChange}
								></textarea>
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
			{!showAuthorModal && showAuthor && (
				<div   ref={authorRef}>
				<div className="card  m-1">
					<div className="card-body py-2">
						<p className="mb-0">
						{authorData?.name}
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

export default Author;
