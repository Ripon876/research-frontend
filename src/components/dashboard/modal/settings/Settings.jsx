import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Toast from "../../../../utilities/Toast";
import "./Settings.css";

function Settings() {
	const [profilePic, setProfilePic] = useState("");
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const mdData = {
		name: user?.name ? user.name : "",
		email: user?.email ? user.email : "",
	};
	const reData = {
		name: user?.name ? user.name : "",
		email: user?.email ? user.email : "",
		institution: user?.institution ? user.institution : "",
		department: user?.department ? user.department : "",
	};

	const [data, setData] = useState(
		user?.type === "Researcher" ? reData : mdData
	);

	const uploadPhoto = (e) => {
		let photo = e.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onload = () => {
			setData({
				...data,
				profilePic: reader.result
			})
			setProfilePic(reader.result);
		};
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};


const saveData = () => {
	dispatch({
		type: 'UPDATE_USER',
		user: data
	});
	console.log('data updated')
	Toast({ type: "success", icon: "success", title: 'Profile Updated' });
}

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<div className="profileSetting">
			<h3>Profile Settings</h3>
			<div className="container">
				<div>
					<div className="row justify-content-start">
						<div className="col-md-5">
							<div className="form-group">
								<label for="name">Full Name</label>
								<input
									type="text"
									className="form-control"
									id="name"
									name="name"
									value={data?.name}
									onChange={handleChange}
									aria-describedby="emailHelp"
								/>
							</div>
							<div className="form-group">
								<label for="email">Email address</label>
								<input
									type="email"
									className="form-control"
									id="email"
									name="email"
									value={data?.email}
									onChange={handleChange}
									aria-describedby="emailHelp"
								/>
							</div>
							{user?.type === "Researcher" && (
								<>
									<div className="form-group">
										<label for="institution">
											Institution
										</label>
										<input
											type="text"
											className="form-control"
											id="institution"
											name="institution"
											value={data?.institution}
											onChange={handleChange}
											aria-describedby="emailHelp"
										/>
									</div>
									<div className="form-group">
										<label for="department">
											Departments
										</label>
										<input
											type="text"
											className="form-control"
											id="department"
											name="department"
											value={data?.department}
											onChange={handleChange}
											aria-describedby="emailHelp"
										/>
									</div>
								</>
							)}
						</div>

						<div className="col-md-5">
							<div class="form-group">
								<label for="profilePicture">
									Profile Picture
								</label>
								<input
									type="file"
									class="form-control-file"
									id="profilePicture"
									onChange={uploadPhoto}
									accept="image/*"
								/>
							</div>

							{profilePic && (
								<div
									style={{ width: "250px", height: "250px" }}
								>
									<img
										src={profilePic}
										className="img-fluid rounded-circle h-100 w-100"
										style={{ objectFit: "cover" }}
									/>
								</div>
							)}
						</div>
					</div>
					<button  className="btn btn-primary subBtn" onClick={saveData} >
						Save
					</button>
				</div>
			</div>
		</div>
	);
}

export default Settings;
