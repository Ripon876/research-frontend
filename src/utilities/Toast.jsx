import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function Toast({ type, icon, title }, cb) {
	const Toast = MySwal.mixin({
		toast: true,
		position: "top-end",
		iconColor: "#9ca3af",
		showConfirmButton: false,
		timer: 1500,
		target: ".contentViewer",
		customClass: {
			popup: "colored-toast",
		},
		timerProgressBar: true,
	});

	Toast.fire({
		type: type,
		icon: icon,
		title: title,
	}).then(() => {
		console.log("fired");
		if (cb) {
			cb(false);
		}
	});
}

export { MySwal };
export default Toast;
