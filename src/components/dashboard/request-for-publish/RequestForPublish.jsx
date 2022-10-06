import {Link} from 'react-router-dom';
import SideBar from '../navigation/SideBar';
import Header from '../navigation/Header';

function RequestForPublish() {
	return (
		  <>
        <Header />
        <section className="dashboard mt-4" >
            <div className="row">
                <SideBar />
                <div className="col-md-9 py-5">
                  <div className="container row">
                    <div className="col-md-8 offset-2 col-10 offset-1">
                      <form>
                        <h4 className="font-weight-bold py-3">Request For Publish</h4>
                        <div className="form-group">
                          <input type="text" name="institution" className="form-control" placeholder="Title" />
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" placeholder="Description" rows='6'></textarea>
                        </div>
                        <div className="form-group">
                          <input type="file" name="institution_id" className="form-control" placeholder="Institution ID" />
                        </div>
                        <div className="form-group text-center mt-4">
                          <input type="submit" name="Submit" className="btn btn-primary btn-sm px-5 py-2 rounded-pill subBtn" />
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

export default RequestForPublish;