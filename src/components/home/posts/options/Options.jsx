import './Options.css';

function Options() {
	return (
		<div>
			<div className="w-100">
				<div className="d-flex justify-content-between">
					<div className="postOptions like">
						<i class="icofont-like pr-1"></i>
						<p className="small m-0">Like</p>
					</div>
					<div className='dropup'>
					<div
						className="postOptions share dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i class="icofont-share pr-1"></i>
						<p className="small m-0">Share</p>
					</div>
					 <div class="dropdown-menu">
						<a class="dropdown-item" href="#">
							<i class="icofont-facebook"></i> <span className='small text-muted pl-1'>Facebook</span>
						</a>
						<a class="dropdown-item" href="#">
							<i class="icofont-twitter"></i> <span className='small text-muted pl-1'>Twitter</span>
						</a>
						<a class="dropdown-item" href="#">
							<i class="icofont-linkedin"></i> <span className='small text-muted pl-1'>LinkedIn</span>
						</a>
					
						<a class="dropdown-item" href="#">
							<i class="icofont-link"></i> <span className='small text-muted pl-1'>Copy Link</span>
						</a>
					</div> 
					</div> 


				{/*	<div class="dropdown-menu dpMenu2">
						<a class="dropdown-item" href="#">
							<i class="icofont-facebook"></i>
						</a>
						<a class="dropdown-item" href="#">
							<i class="icofont-twitter"></i>
						</a>
						<a class="dropdown-item" href="#">
							<i class="icofont-linkedin"></i>
						</a>

						<a class="dropdown-item" href="#">
							<i class="icofont-link"></i>
						</a>
					</div>*/}
				</div>
			</div>
		</div>
	)
}

export default Options;