import { useEffect, useState, useRef } from "react";
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
  const idFrontRef = useRef(null);
  const idBackRef = useRef(null);

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

  const uploadId = (side) => {
    if (side === "front") {
      idFrontRef.current.click();
    } else {
      idBackRef.current.click();
    }
  };

  const uploadIdImg = (e) => {
    console.log(e);
    let side = e.target.name;

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      // reader.result
      if (side === "front") {
        idFrontRef.current.previousSibling.style.background =
          "url(" + reader.result + ")";
      } else {
        idBackRef.current.previousSibling.style.background =
          "url(" + reader.result + ")";
      }
    };
  };

  return (
    <>
      <section className="inner-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="registration-form mb-5">
                <form className="beAResearcherForm">
                  <div className="d-flex justify-content-center align-items-baseline mb-4">
                    <h4>Request to be a Researcher</h4>
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
                    <label>Institution</label>
                    <input
                      type="text"
                      name="institution"
                      className="form-control"
                      placeholder="your institution"
                    />
                  </div>
                  <div className="form-group">
                    <label>Institution ID No.</label>
                    <input
                      type="text"
                      name="institution"
                      className="form-control"
                      placeholder="institution id"
                    />
                  </div>
                  <div className="form-group">
                    <label>Department</label>
                    <input
                      type="text"
                      name="department"
                      className="form-control"
                      placeholder="your department"
                    />
                  </div>
                  <div className="form-group">
                    <label>Institution ID card</label>
                    <div className="px-3 w-100 my-2 d-flex justify-content-center">
                      <div className="w-50">
                        <div
                          className="idUpload"
                          onClick={() => {
                            uploadId("front");
                          }}
                        >
                          Front Side
                        </div>
                        <input
                          type="file"
                          ref={idFrontRef}
                          className="d-none"
                          accept=".png,.jpg,.jpeg"
                          onChange={uploadIdImg}
                          name="front"
                        />
                      </div>
                      <div className="w-50">
                        <div
                          className="idUpload"
                          onClick={() => {
                            uploadId("back");
                          }}
                        >
                          Back Side
                        </div>
                        <input
                          type="file"
                          ref={idBackRef}
                          className="d-none"
                          accept=".png,.jpg,.jpeg"
                          onChange={uploadIdImg}
                          name="back"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Topics you are Interested on</label>
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
