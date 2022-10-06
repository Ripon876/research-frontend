import './BeAResearcher.css';

function BeAResearcher() {
	return (
		<>
 
<section className="inner-page">
      <div className="container">
       
        <div className="row">
          <div className="col-md-5 align-items-center d-flex">
            <img src="assets/img/about.jpg" className="img-fluid rounded" />
          </div>
          <div className="align-items-center col-md-7 d-flex pt-4 row ">
            <div className="col-md-8">
              <form>
              <h4 className="font-weight-bold py-3"> Request to be a Researcher</h4>
              <div className="form-group ">
                
                <input type="text" name="name" className="form-control" placeholder="Fullname" />
              </div>
              <div className="form-group">
                <input type="email" name="Email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" name="institution" className="form-control" placeholder="Institution" />
              </div>
              <div className="form-group">
                <input type="text" name="dept" className="form-control" placeholder="Department" />
              </div>
              <div className="form-group">
               
                <input type="text" name="title" className="form-control" placeholder="Topic you are interested on" />
              </div>
              <div className="form-group">
                <input type="text" name="institution_id" className="form-control" placeholder="Institution ID" />
              </div>
              <div className="form-group text-center mt-4">
                <input type="submit" name="Submit" className="btn btn-primary btn-sm px-5 py-2 rounded-pill subBtn" />
              </div>
            </form>
            </div>
            <div className="col-md-4">
              <div  style={{height: '180px', width: '200px', color: 'red'}} className="border my-3">
                <img src="assets/img/john.png" className="img-fluid" />
              </div>
              <div className="form-group">
                <input type="file" name="Passport" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
		</>
	)
}

export default BeAResearcher;