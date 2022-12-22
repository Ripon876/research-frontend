import { useEffect, useState, useRef } from "react";
import "./PublishAnArticle.css";
import "./PublishAnArticle2.css";

function PublishAnArticle2() {
	const initialData = {
		name: "",
		email: "",
		title: "",
		description: "",
	};
// uAN = uploaded Article Name


	const [formData, updateFormData] = useState(initialData);
	const articleUploadRef = useRef(null);
const [uAN, setUAN] = useState('');


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
}


	return (
		<>
			<section className="inner-page">
				<div className="container">
					<div className="box mx-2 registration-form mb-5">
						<form style={{ maxWidth: "100%" }}>
							<div className="d-flex justify-content-center align-items-baseline mb-4">
								<h4>Publication Request</h4>
							</div>
							<div className="mb-3">
								<h4>
									Write it down or
									<u className="uploadText ml-2" onClick={uploadArticle}>
										Upload 
										<i class="icofont-upload-alt ml-2"></i>
									</u>
									<span className='ml-3 text-success'>{uAN}</span>
								</h4>
								<input
									type="file"
									accept=".pdf,.doc"
									className="articleUpload"
									ref={articleUploadRef}
									onChange={uploadArticleFile}
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control item"
									name="name"
									placeholder="Full name"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control item"
									name="email"
									placeholder="Email"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control item"
									name="title"
									placeholder="Title of Publication Article"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<textarea
									className="form-control"
									placeholder="Description"
									rows="7"
									name="description"
									onChange={handleChange}
								></textarea>
							</div>
							<div className="form-group">
								<input
									type="file"
									name="file"
									className="form-control item"
								/>
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

export default PublishAnArticle2;
