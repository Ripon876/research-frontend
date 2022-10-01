import './Awards.css';

function Awards() {
	return (
		<>
	    <section id="counts" className="counts">
	      <div className="container">
	        <h4 className="font-weight-bold py-5">OUR AWARD</h4>
	        <div className="row">

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="icofont-doctor-alt"></i>
              <h4 className="font-weight-bold" >Our Team</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="icofont-patient-bed"></i>
              <h4 className="font-weight-bold" >Our Vision</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-laboratory"></i>
              <h4 className="font-weight-bold" >Research Labs</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-award"></i>
              <h4 className="font-weight-bold" >Awards</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            </div>
          </div>

        </div>

      </div>
      <div className="container mt-4">
        <h4 className="font-weight-bold">Best Research institution</h4>
        <div className="row">
          <div className="col-md-3 pb-4">
            <div className="count-box">
              <span><img src="assets/img/logo/a2.jpg" className="img-fluid" /></span>
              <h5 className="font-weight-bold">Ignatius university</h5>
            </div>
          </div>
          <div className="col-md-3 pb-4">
            <div className="count-box">
              <span><img src="assets/img/logo/a4.jpg" className="img-fluid" /></span>
              <h5 className="font-weight-bold">FUTO university</h5>
            </div>
          </div>
          <div className="col-md-3 pb-4">
            <div className="count-box">
              <span><img src="assets/img/logo/a3.jpg" className="img-fluid" /></span>
              <h5 className="font-weight-bold">UNIBEN university</h5>
            </div>
          </div>
          <div className="col-md-3 pb-4">
            <div className="count-box">
              <span><img src="assets/img/logo/a5.jpg" className="img-fluid" /></span>
              <h5 className="font-weight-bold">UNIPORT university</h5>
            </div>
          </div>

        </div>
      </div>
    </section>	
		</>
	)
}

export default Awards;