import React from "react";

function Footer() {
	return (
		<div>
			<footer>
				<div
					className="text-center p-4"
					style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}
				>
					© 2022 Copyright:
					<a
						className="text-reset fw-bold pl-1"
						href="/"
					>
						Research
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
