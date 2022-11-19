import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import "./BeAResearcher.css";

function BeAResearcher() {
  const initialData = {
    name: "",
    email: "",
    institution: "",
    department: "",
    institution_id: "",
    interestedOn: [],
  };
  const [formData, updateFormData] = useState(initialData);

  const handleChange = (event) => {
    if (event === null) {
      updateFormData({
        ...formData,
        interestedOn: [],
      });
      return;
    }
    if (Array.isArray(event)) {
      console.log(event);
      updateFormData({
        ...formData,
        interestedOn: [...event],
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
    { value: "topic_1", label: "Topic 1" },
    { value: "topic_2", label: "Topic 2" },
    { value: "topic_3", label: "Topic 3" },
  ];

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderRadius: "20px !important",
      marginBottom: "25px !important",
      padding: "2px 10px",
      boxShadow: "4px 2px 4px 0px #25292d2e !important",
      height: "45px",
    }),
  };

  return (
    <>
      <section className="inner-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="registration-form mb-5">
                <form>
                  <div className="d-flex justify-content-center align-items-baseline mb-4">
                    <h4>Request to be a Researcher</h4>
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
                      name="institution"
                      placeholder="Institution"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="department"
                      placeholder="Department"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <CreatableSelect
                      isClearable
                      options={options}
                      styles={selectStyles}
                      placeholder="Topic you are interested on"
                      onChange={handleChange}
                      isMulti
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control item"
                      name="institution_id"
                      placeholder="Institution ID"
                      onChange={handleChange}
                    />
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
          </div>
        </div>
      </section>
    </>
  );
}

export default BeAResearcher;
