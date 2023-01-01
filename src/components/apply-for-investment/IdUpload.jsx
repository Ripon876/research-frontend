import { useEffect, useState, useRef } from "react";

function IdUpload({ title }) {
	const [files, updateFiles] = useState([]);
	const idFrontRef = useRef(null);
	const idBackRef = useRef(null);

	const uploadId = (side) => {
		if (side === "front") {
			idFrontRef.current.click();
		} else {
			idBackRef.current.click();
		}
	};

	const uploadIdImg = (e) => {
		console.log(e);
		let side = e.target.name;

		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			// reader.result
			if (side === "front") {
				idFrontRef.current.previousSibling.style.background =
					"url(" + reader.result + ")";
			} else {
				idBackRef.current.previousSibling.style.background =
					"url(" + reader.result + ")";
			}
		};
	};

	return (
		<div className="form-group">
			<label>{title}</label>
			<div className="px-3 w-100 my-2 d-flex justify-content-center">
				<div className="w-50">
					<div
						className="idUpload"
						onClick={() => {
							uploadId("front");
						}}
					>
						Front Side
					</div>
					<input
						type="file"
						ref={idFrontRef}
						className="d-none"
						accept=".png,.jpg,.jpeg"
						onChange={uploadIdImg}
						name="front"
					/>
				</div>
				<div className="w-50">
					<div
						className="idUpload"
						onClick={() => {
							uploadId("back");
						}}
					>
						Back Side
					</div>
					<input
						type="file"
						ref={idBackRef}
						className="d-none"
						accept=".png,.jpg,.jpeg"
						onChange={uploadIdImg}
						name="back"
					/>
				</div>
			</div>
		</div>
	);
}

export default IdUpload;
