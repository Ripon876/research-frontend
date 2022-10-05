import './Login.css';

function Login() {
	return (
		<>
 		<section  className="mt-5">
	      <div className="container py-5">
	       
	        <div className="row">
	          
	          <div className="col-md-6 shadow py-5 offset-md-3">
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
	              <div className="form-group">
	                
	                <input type="submit" name="submit" className="subBtn btn btn-primary btn-sm px-4 py-2 rounded-pill" placeholder="Password" />
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