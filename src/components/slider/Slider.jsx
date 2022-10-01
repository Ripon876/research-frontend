import './Slider.css';
function Slider() {
	return (
		<>
		  <section id="hero" >
		      <div id="carouselExampleControls" className="carousel slide h-100" data-ride="carousel">
		          <div className="carousel-inner  h-100">
		            <div className="carousel-item active  h-100">
		              <img className="d-block w-100  h-100" src="assets/img/hero-bg.jpg" alt="First slide" />
		            </div>
		            <div className="carousel-item  h-100">
		              <img className="d-block w-100  h-100" src="assets/img/hero-bg.jpg" alt="Second slide" />
		            </div>
		            <div className="carousel-item  h-100">
		              <img className="d-block w-100  h-100" src="assets/img/hero-bg.jpg" alt="Third slide" />
		            </div>
		          </div>
		          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
		            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		            <span className="sr-only">Previous</span>
		          </a>
		          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
		            <span className="carousel-control-next-icon" aria-hidden="true"></span>
		            <span className="sr-only">Next</span>
		          </a>
		        </div>
		  </section>
		</>
	)
}

export default Slider;