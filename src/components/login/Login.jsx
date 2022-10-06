import './Login.css';

function Login() {
	return (
		<>
 		<section  className="mt-5 login">
	      <div className="container py-5">
	       
	        <div className="row">
	          
	          <div className="col-md-6 offset-md-3 px-4 py-5 shadow">
	            <div className="box mx-2">
	              <form>
	              <h4 className="font-weight-bold text-capitalize text-center">lOGIN</h4>
	              
	              <div className="form-group">
	                <label>Email</label>
	                <input type="email" name="Email" className="form-control" placeholder="your@gmail" />
	              </div>
	              
	              <div className="form-group">
	                <label>Password</label>
	                <input type="Password" name="Password" className="form-control" placeholder="***********" />
	              </div>
	              <div className="form-group mt-4 text-center">
	                <input type="submit" name="submit" className="btn btn-primary btn-sm px-5 py-2 rounded-pill subBtn" placeholder="Password" />
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

export default Login;