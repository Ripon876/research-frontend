import { useEffect, useState, useRef } from "react";
import Section from "./Section";
import Reference from "./Reference";
import Author from "./Author";
import Subject from "./Subject";
import "./PublishAnArticle.css";

function PublishAnArticle() {
	const initialData = {
		name: "",
		email: "",
		title: "",
		description: "",
	};
	// uAN = uploaded Article Name

	const [formData, updateFormData] = useState(initialData);
	const articleUploadRef = useRef(null);
	const [uAN, setUAN] = useState("");

	const [sectionList, setSectionList] = useState([<Section key={1} />]);
	const [referenceList, setReferenceList] = useState([]);
	const [authorList, setAuthorList] = useState([]);
	const [subjectList, setSubjectList] = useState([]);

	const addNewSection = () => {
		setSectionList(
			sectionList.concat(<Section key={sectionList.length} />)
		);
	};
	const addNewReference = () => {
		setReferenceList(
			referenceList.concat(<Reference key={referenceList.length} />)
		);
	};
	const addNewAuthor = () => {
		setAuthorList(authorList.concat(<Author key={authorList.length} />));
	};
	const addNewSubject = () => {
		setSubjectList(
			subjectList.concat(<Subject key={subjectList.length} />)
		);
	};

	const handleChange = (event) => {
		if (event === null) {
			updateFormData({
				...formData,
				work_as: "",
			});
			return;
		}
		if (event.value) {
			updateFormData({
				...formData,
				work_as: event.value,
			});
		} else {
			updateFormData({
				...formData,
				[event.target.name]: event.target.value.trim(),
			});
		}
	};

	const handleSubmit = () => {
		console.log(formData);
	};

	const uploadArticle = () => {
		articleUploadRef.current.click();
	};

	const uploadArticleFile = (e) => {
		setUAN(e.target.files[0].name);
	};

	return (
		<>
			<section className="inner-page">
				<div className="container">
					<div className="box mx-2 registration-form mb-5">
						<form style={{ maxWidth: "100%" }} className="form">
							<div className="d-flex justify-content-center align-items-baseline mb-4">
								<h4>Publication Request</h4>
							</div>
							<div className="mb-3">
								<h4>
									Write it down or
									<u
										className="uploadText ml-2"
										onClick={uploadArticle}
									>
										Upload
										<i class="icofont-upload-alt ml-2"></i>
									</u>
									<span className="ml-3 text-success">
										{uAN}
									</span>
								</h4>
								<input
									type="file"
									accept=".pdf,.doc"
									className="articleUpload"
									ref={articleUploadRef}
									onChange={uploadArticleFile}
								/>
							</div>
							<div className='position-relative'>
								<div className={uAN ? "articleUploaded" : ""}>
									<div>
										<p className="mb-0">Title</p>
										<div className="form-group">
											<input
												type="text"
												className="form-control item"
												name="title"
												placeholder="title"
												onChange={handleChange}
											/>
										</div>
									</div>
									<div>
										<p className="mb-1">Sections</p>
										{sectionList && sectionList}
									</div>
									<div className="form-group">
										<button
											type="button"
											className="btn btn-block addSection"
											onClick={addNewSection}
										>
											<i class="icofont-plus"></i> Add
											Section
										</button>
									</div>
									<div className="mt-4">
										<p className="mb-1">References</p>

										{referenceList && referenceList}
									</div>
									<button
										type="button"
										className="btn btn-block addSection"
										onClick={addNewReference}
									>
										<i class="icofont-plus"></i> Add
										Reference
									</button>

									<div className="mt-4">
										<p className="mb-1">Subjects</p>
										<div className="mb-3">
											<div className="row">
												{subjectList && subjectList}
												<div className="card ml-4  m-1 addSection">
													<div
														class="card-body py-1"
														onClick={addNewSubject}
													>
														<p class="mb-0">
															<i class="icofont-plus"></i>{" "}
															Add Subject
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="mt-4">
										<p className="mb-1">Authors</p>
										<div className="mb-3">
											<div className="row">
												{authorList && authorList}
												<div className="card ml-4  m-1 addSection">
													<div
														class="card-body py-1"
														onClick={addNewAuthor}
													>
														<p class="mb-0">
															<i class="icofont-plus"></i>{" "}
															Add Author
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{uAN && (
									<div className="fileUploadNotic">
										<h3 className='font-weight-bold'>Article File Uploaded</h3>
									</div>
								)}
							</div>

							<div className="form-group">
								<button
									type="button"
									className="btn btn-block submit"
									onClick={handleSubmit}
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}

export default PublishAnArticle;
