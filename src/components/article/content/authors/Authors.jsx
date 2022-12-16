import { useState } from "react";

function Authors({authors}) {


	const [showAllAuthors, setSAA] = useState(false);

	return (
		<div className="articleAuthors">
			{authors?.length > 25 ? (
				<>
					{authors?.slice(0, 24)?.map((author) => (
						<a
							href="#"
							className="mr-2"
							style={{
								textDecoration: "underline",
							}}
						>
							{author?.name}
						</a>
					))}
				</>
			) : (
				<>
					{authors?.map((author) => (
						<a
							href="#"
							className="mr-2"
							style={{
								textDecoration: "underline",
							}}
						>
							{author?.name}
						</a>
					))}
				</>
			)}

			{!showAllAuthors && (
				<button className="btn btn-dark seeMoreAuthor rounded-pill">
					<i className="icofont-long-arrow-left pr-2"></i>
					{!showAllAuthors
						? "Show Fewer Authors"
						: "Show All Authros"}
				</button>
			)}
		</div>
	);
}

export default Authors;
