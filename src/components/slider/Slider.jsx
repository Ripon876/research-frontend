import './Slider.css';
function Slider() {
	return (
		<>
		  <section id="hero" >
		      <div id="carouselExampleControls" class="carousel slide h-100" data-ride="carousel">
		          <div class="carousel-inner  h-100">
		            <div class="carousel-item active  h-100">
		              <img class="d-block w-100  h-100" src="assets/img/hero-bg.jpg" alt="First slide" />
		            </div>
		            <div class="carousel-item  h-100">
		              <img class="d-block w-100  h-100" src="assets/img/hero-bg.jpg" alt="Second slide" />
		            </div>
		            <div class="carousel-item  h-100">
		              <img class="d-block w-100  h-100" src="assets/img/hero-bg.jpg" alt="Third slide" />
		            </div>
		          </div>
		          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
		            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		            <span class="sr-only">Previous</span>
		          </a>
		          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
		            <span class="carousel-control-next-icon" aria-hidden="true"></span>
		            <span class="sr-only">Next</span>
		          </a>
		        </div>
		  </section>
		</>
	)
}

export default Slider;