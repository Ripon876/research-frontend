import {Link} from 'react-router-dom';
import Header from '../navigation/Header';
import SideBar from '../navigation/SideBar';
import {researches} from './researches';


function PublishedResearch() {
	return (
		<>
		<Header />
	   <section className="dashboard mt-4"  id="dashboard">
        <div className="row">
          <SideBar />
          <div className="col-md-9 py-5">
            <div className="container">
		        <div className="section-title">
		          <h2>Publication</h2>
		          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
		        </div>

		        <div className="row">
					{researches?.map((research)=> 
					    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" id="shadow">
					        <div className="icon-box">
					            <h4><Link to={'/dashboard/view-research?id=' + Math.floor(Math.random() * 999)}>{research.title}</Link></h4>
					            <span className="font-weight-bold"><i>Author: {research.author}</i></span>
					            <p>{research.description}</p>
					        </div>
					    </div>
					)}
		        </div>
            </div>
          </div>
        </div>
    </section>
		</>
	)
}

export default PublishedResearch;