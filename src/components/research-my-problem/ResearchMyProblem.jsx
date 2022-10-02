import './ResearchMyProblem.css';

function ResearchMyProblem() {
	return (
		<>
	 <section className="inner-page">
	      <div className="container">
        <div className="row">
          <div className="col-md-6 align-items-center col-md-6 d-flex">
            <img src="assets/img/about.jpg" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 pt-5">
            <div className="box mx-2">
              <form>
              <h4 className="font-weight-bold">Request To Research Your Problem</h4>
              <div className="form-group">
                
                <input type="text" name="name" className="form-control" placeholder="Fullname" />
              </div>
              <div className="form-group">
              
                <input type="email" name="Email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group">
               
                <input type="text" name="title" className="form-control" placeholder="Title of Publication Article" />
              </div>
              <div className="form-group">
          
                <input type="text" name="title" className="form-control" placeholder="Topic" />
              </div>
              <div className="form-group">
                <label>Why do you want to research on this topic?</label>
                <input type="text" name="title" className="form-control" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" placeholder="Description" rows='6'></textarea>
              </div>
              
              <div className="form-group">
                <input type="submit" name="submit" className="btn btn-primary btn-sm px-4 py-2 rounded-pill" />
              </div>
            </form>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
		</>
	)
}

export default ResearchMyProblem;