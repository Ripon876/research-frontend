import { useEffect, useState, useRef } from "react";


const Section = () => {
	const initialFigData = {
		figTitle: "",
		figImg: "",
		figDescription: "",
	};
	const [sectionId, setSectionId] = useState("");
	const [figData, setFigData] = useState(initialFigData);
	const [figParentId, setFigParentId] = useState("");

	const [showFigure, setShowFigure] = useState(false);
	const sectionRef = useRef(null);

	const addFigure = (e) => {
		console.log(e);
		// setFigParentId(e.target.parentElement.previousSibling.id);
		setFigParentId(sectionId);
		setShowFigure(true);
	};

	const handleFigSubmit = () => {
		console.log(figData);
		setShowFigure(false);

		let elem = document.createElement("div");
		elem.innerHTML = `<div class="card pt-4 px-3 mb-4 " contenteditable="false">
					<h6>
						<strong>
						Fig 1:
							${figData.figTitle}
						</strong>
					</h6>
					<img src='${figData.figImg}' class="img-fluid card-img-top mb-2" />
					<p>${figData.figDescription}</p>
				</div>
				<div><br></div><div><br></div>`;

		document.querySelector("#" + figParentId).appendChild(elem);
	};

	const handleFig = (e) => {
		setFigData({
			...figData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const upFigImg = (e) => {
		let photo = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			setFigData({
				...figData,
				figImg: reader.result,
			});
		};
	};

	const figClose = () => {
		setFigData(initialFigData);
		setShowFigure(false);
	};

	const removeSection = (e) => {
		sectionRef.current.remove();
	};

	useEffect(() => {
		setSectionId(
			"sec" +
				Math.floor(Math.random() * 0xffffff)
					.toString(16)
					.padEnd(7, "0")
		);
	}, []);

	return (
		<>
			{showFigure && (
				<div className="align-items-center d-flex figureModal">
					<div className="container p-5">
						<div className="text-right">
							<i
								class="icofont-2x icofont-close ml-2 closeModal"
								onClick={figClose}
							></i>
						</div>
						<form className="p-0 shadow-none">
							<div className="d-flex justify-content-center align-items-baseline mb-4">
								<h4>Add Figure</h4>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control item"
									name="figTitle"
									placeholder="Title"
									onChange={handleFig}
								/>
							</div>
							<div className="form-group">
								<input
									type="file"
									name="figImg"
									className="form-control item"
									onChange={upFigImg}
									accept=".png,.jpg,.jpeg,.gif"
								/>
							</div>
							<div className="form-group">
								<textarea
									className="form-control"
									placeholder="Description"
									rows="7"
									name="figDescription"
									onChange={handleFig}
								></textarea>
							</div>

							<div className="form-group">
								<button
									type="button"
									className="btn btn-block subBtn submit"
									onClick={handleFigSubmit}
								>
									Add
								</button>
							</div>
						</form>
					</div>
				</div>
			)}

			<div className="form-group border" ref={sectionRef}>
				<div className="position-relative">
					<div
						contentEditable="true"
						className="p-3 section"
						placeholder="write something"
						id={sectionId}
					>
						<h4 className="border-bottom pb-2 mb-2">
							Section Title
						</h4>
						<p>section details</p>
						<img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQCze-mfukcuvzKk7Ilj2zQ0CS6PbOkq7ZhRInnNd1Yz3TQzU4e&t=1" />
					</div>

					<div className="sectionOptions">
						<div
							className="addFigure"
							onClick={(e) => {
								addFigure(e);
							}}
						>
							Add figure <i class="icofont-plus"></i>
						</div>
						<div
							className="removeSection"
							onClick={(e) => {
								removeSection(e);
							}}
						>
							Remove Section <i class="icofont-delete-alt"></i>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section;
