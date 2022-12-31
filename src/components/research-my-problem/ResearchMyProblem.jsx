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
  const [codeBox, setCodeBox] = useState({
    email: false,
    number: false,
  });
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

  const options = [
    "Agriculture",
    "Electronics",
    "Engineering Design (CAD/Simulation)",
    "Coding",
    "Marketing and Advertising",
    "Idea Gathering",
    "Data collection & Data Analysis",
    "PCB Design",
    "Micro-processor and Controlling Unit",
    "Medical Technology",
    "Reverse Engineering",
    "Autombile Engineering",
    "other",
  ];

  const showCodeBox = (type) => {
    setCodeBox({
      ...codeBox,
      [type]: true,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="registration-form my-5">
        <form
          style={{ maxWidth: "650px" }}
          className="researcheMyProblemForm"
          onSubmit={handleFormSubmit}
        >
          <div className="d-flex justify-content-center align-items-baseline mb-4">
            <h4>Request To Research Your Problem</h4>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Jhone Doe"
            />
          </div>
          <div className="form-group">
            <label>Problem title</label>
            <input
              type="text"
              name="problem_title"
              className="form-control"
              placeholder="title"
            />
          </div>
          <div className="form-group">
            <label>Problem title</label>
            <select className="select form-control" style={{ height: "45px" }}>
              {options?.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Problem objctives (benefit)</label>
            <input
              type="text"
              name="problem_title"
              className="form-control"
              placeholder="benefit"
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="problem_title"
              className="form-control"
              placeholder="your location"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              placeholder="description"
              rows="5"
              name="description"
            ></textarea>
          </div>
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
