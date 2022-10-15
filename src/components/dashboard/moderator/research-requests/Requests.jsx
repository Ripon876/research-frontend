import { Link } from "react-router-dom";
import { requests } from "./smd";

function Requests() {
  return (
    <div className="container">
      <div className="section-title">
        <h2>Requests</h2>

        <table class="table mt-5">
          <caption>All request submited by researchers</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Researcher</th>
              <th scope="col">Topic</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests?.map((request, i) => (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{request.researcher}</td>
                <td>{request.topic}</td>
                <td>
                  <Link to={`/dashboard/moderator/requests/${request.id}`}>
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Requests;
