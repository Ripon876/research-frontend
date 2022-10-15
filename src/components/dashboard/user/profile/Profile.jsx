import {Link} from 'react-router-dom';
import "./Profile.css";
import {requests} from './smd';

function Profile() {
	return (
		<div className="container">
			<div className="section-title">
				<h2>Profile</h2>

				<div className="d-flex justify-content-center">
					<div className="info mt-5 col-6">
						<img
							src="https://via.placeholder.com/200x200"
							className="img-fluid rounded-circle mb-4"
						/>
						<div className="text-left">
							<p>
								Name:<strong className="pl-3">Jhon Doe</strong>
							</p>
							<p>
								Email:<strong className="pl-3">jhondoe@gmail.com</strong>
							</p>
							<p>
								Phone:<strong className="pl-3">+92 23234342</strong>
							</p>
						</div>
					</div>
				</div>


<div className='text-left mt-5'>
	<h3>My Researches</h3>



  <table class="table mt-5">
          <caption>All request submited by you</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests?.map((request, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{request.topic}</td>
                <td>{request.status}</td>
                <td>
                  <Link to={`/dashboard/user/view-research?id=${request.id}`}>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>



</div>


			</div>
		</div>
	);
}

export default Profile;
