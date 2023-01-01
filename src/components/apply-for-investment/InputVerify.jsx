import { useEffect, useState, useRef } from "react";

function InputVerify() {
	const [codeBox, setCodeBox] = useState({
		email: false,
		number: false,
	});
	const showCodeBox = (type) => {
		setCodeBox({
			...codeBox,
			[type]: true,
		});
	};

	return (
		<div className="form-group">
			<div>
				<label>WhatsApp no</label>
				<div className="userEmail">
					<input
						type="email"
						name="phone_number"
						className="form-control"
						placeholder="+880 _ _ _ _ _"
					/>
					<button
						className="btn"
						onClick={() => {
							showCodeBox("number");
						}}
					>
						Verify
					</button>
				</div>
			</div>
			{codeBox.number && (
				<div className="form-group mt-3 d-flex align-items-center">
					<input
						type="text"
						name="whatsapp_verification_code"
						className="form-control w-50 verification_code"
						placeholder="enter verification code"
					/>
					<div>
						<i class="icofont-tick-mark ml-3 codeStatus"></i>
						<i class="icofont-close codeStatus"></i>
					</div>
				</div>
			)}
		</div>
	);
}

export default InputVerify;
