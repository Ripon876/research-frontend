import './About.css';

function About() {
	return (
		<>
    <section id="about" className="about">
      <div className="container-fluid">
          <h4 className="font-weight-bold py-5 px-4">OUR ACHIEVEMENT </h4>
        <div className="row">
          
          <div className="align-items-stretch col-lg-6 col-xl-5 d-flex justify-content-center p-0 video-box">
            <img src="./assets/img/about.jpg" className="img-fluid" style={{ objectFit: 'cover'}} />
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
            
            <div className='d-flex'>
              <div className="icon-box" >
                <div className="icon"><i className="bx bx-fingerprint"></i></div>
                <div>
                   <h4 className="title"><a href="">OUR VISION</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-gift"></i></div>
                <div>
                  <h4 className="title"><a href="">OUR PLAN</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>            
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-atom"></i></div>
                <div>
                  <h4 className="title"><a href="">OUR TEAM</a></h4>
                  <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                </div>            
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
		</>
	)
}

export default About;