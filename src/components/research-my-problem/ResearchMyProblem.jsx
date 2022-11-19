import { useEffect, useState } from "react";
import "./ResearchMyProblem.css";

function ResearchMyProblem() {
  const initialData = {
    name: "",
    email: "",
    title: "",
    topic: "",
    reason: "",
    description: "",
  };

  const [formData, updateFormData] = useState(initialData);

  const handleChange = (event) => {
    if (event === null) {
      updateFormData({
        ...formData,
        work_as: "",
      });
      return;
    }
    if (event.value) {
      updateFormData({
        ...formData,
        work_as: event.value,
      });
    } else {
      updateFormData({
        ...formData,
        [event.target.name]: event.target.value.trim(),
      });
    }
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <div className="registration-form my-5">
        <form style={{ maxWidth: "650px" }}>
          <div className="d-flex justify-content-center align-items-baseline mb-4">
            <h4>Request To Research Your Problem</h4>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              name="name"
              placeholder="Full name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              name="title"
              placeholder="Title of Publication Article"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              name="topic"
              placeholder="Topic"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              name="reason"
              placeholder="Why do you want to research on this topic?"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Description"
              rows="7"
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-block submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResearchMyProblem;
