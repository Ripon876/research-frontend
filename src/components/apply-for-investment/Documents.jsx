import { useEffect, useState, useRef } from "react";

function Documents({ title }) {
	const [files, updateFiles] = useState([]);

	const handleFile = (e) => {
		const name = e.target.files[0].name;
		const type = e.target.files[0].type.split("/").shift();
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			updateFiles([
				...files,
				{ type: type, data: reader.result, name: name },
			]);
		};
	};

	return (
		<>
			<div className="form-group mb-0">
				<label>{title}</label>
				<div className="justify-content-center row">
					{files?.map((file) => (
						<div
							className="m-2"
							style={{
								height: "100px",
								width: "100 px",
							}}
						>
							{file.type === "image" && (
								<img
									src={file.data}
									className="img-fluid rounded w-100 h-100"
									title={file.name}
									style={{ objectFit: "cover" }}
								/>
							)}
							{file.type === "video" && (
								<div className="w-100 h-100 position-relative">
									<video
										src={file.data}
										className="img-fluid rounded w-100 h-100"
										title={file.name}
										style={{
											objectFit: "cover",
										}}
									/>
									<i class="icofont-play-alt-1 icofont-3x videoPlayBtn text-white-50"></i>
								</div>
							)}
							{file.type === "application" && (
								<i
									className="img-fluid rounded w-100 h-100 icofont-file-alt icofont-5x"
									title={file.name}
									style={{ objectFit: "cover" }}
								></i>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="form-group">
				<div className="d-flex">
					<div className="mr-2 fileChooseIcon">
						<input
							type="file"
							placeholder="Email"
							className="form-control d-none image"
							onChange={handleFile}
							accept="image/*"
						/>
						<i
							class="icofont-image"
							onClick={(e) => {
								e.target.previousSibling.click();
							}}
						></i>
					</div>
					<div className="mx-2 fileChooseIcon">
						<input
							type="file"
							placeholder="Email"
							className="form-control d-none video"
							onChange={handleFile}
							accept="video/*"
						/>
						<i
							class="icofont-ui-video-play"
							onClick={(e) => {
								e.target.previousSibling.click();
							}}
						></i>
					</div>
					<div className="ml-2 fileChooseIcon">
						<input
							type="file"
							placeholder="Email"
							className="form-control d-none file"
							onChange={handleFile}
							accept=".doc,.pdf"
						/>
						<i
							class="icofont-file-alt"
							onClick={(e) => {
								e.target.previousSibling.click();
							}}
						></i>
					</div>
				</div>
			</div>
		</>
	);
}

export default Documents;
