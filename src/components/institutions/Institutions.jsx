import Card from './Card';
import './Institutions.css';
import {institutions} from './smd';

function Institutions() {
	return (
    <section id="counts" className="counts pt-0">
      <div className="container mt-4">
        <h4 className="font-weight-bold my-4">Best Research institution</h4>
        <div className="row">
          {institutions?.map((item) => 
            <Card item={item} />
          )}
        </div>
      </div>
    </section>
	)
}

export default Institutions;