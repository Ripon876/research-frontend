import { useNavigate } from "react-router-dom";
import "./About.css";

function Modal() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="position-fixed donate-modal">
				<div className="border-left-0 card px-2 py-2 rounded shadow-lg">
					<h4
						className="card-title m-0"
						onClick={() => {
							navigate("/donate_us")
						}}
					>
						Donate
						<i class="icofont-gift pl-2"></i>
					</h4>
				</div>
			</div>
		</div>
	);
}

export default Modal;
