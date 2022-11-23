import React from "react";

function Footer() {
	return (
		<div>
			<footer>
				<div
					className="text-center p-4"
					style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}
				>
					© 2021 Copyright:
					<a
						className="text-reset fw-bold"
						href="https://mdbootstrap.com/"
					>
						MDBootstrap.com
					</a>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
