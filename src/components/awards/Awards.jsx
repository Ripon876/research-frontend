import Card from './Card';
import InstitutionCard from './InstitutionCard';
import './Awards.css';
import {cardData,institutionData} from './smd';

function Awards() {
	return (
		<>
	    <section id="counts" className="counts">
	      <div className="container">
          <div className="section-title mb-5">
            <h2>OUR AWARD</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
	        <div className="row">
            {cardData?.map((item) =>
               <Card  item={item} />
            )}
          </div>
         </div>
      <div className="container mt-4">
        <h4 className="font-weight-bold my-4">Best Research institution</h4>
        <div className="row">
          {institutionData?.map((item) => 
            <InstitutionCard item={item} />
          )}
        </div>
      </div>
    </section>	
		</>
	)
}

export default Awards;