import { useEffect, useState, useRef } from "react";

function ImgUpload({ title }) {
	const imgRef = useRef(null);

	const showUploader = () => {
		imgRef.current.click();
	};

	const uploadIdImg = (e) => {
		let side = e.target.name;

		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			imgRef.current.previousSibling.style.background =
				"url(" + reader.result + ")";
		};
	};

	return (
		<div>
			<div className="form-group">
				<label>{title}</label>
				<div className="w-50">
					<div className="idUpload" onClick={showUploader}>
						Upload
					</div>
					<input
						type="file"
						ref={imgRef}
						className="d-none"
						accept=".png,.jpg,.jpeg"
						onChange={uploadIdImg}
						name="front"
					/>
				</div>
			</div>
		</div>
	);
}

export default ImgUpload;
