import './PublishAnArticle.css';

function PublishAnArticle() {
	return (
		<>
<section className="inner-page">
      <div className="container">
       
        <div className="row">
          <div className="col-md-6 align-items-center d-flex">
            <img src="assets/img/about.jpg" className="img-fluid rounded" />
          </div>
          <div className="col-md-6  pt-5">
            <div className="box mx-2">
              <form>
              <h4 className="font-weight-bold">Publication Request</h4>
              <div className="form-group">
                <label>Fullname</label>
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="Email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Title of Publication Article</label>
                <input type="text" name="title" className="form-control" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" rows='6'></textarea>
              </div>
              <div className="form-group">
                <label>File</label>
                <input type="file" name="file" className="form-control" />
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

export default PublishAnArticle;