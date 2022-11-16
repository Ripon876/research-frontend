import Card from './Card';
import './Awards.css';
import {cardData} from './smd';

function Awards() {
	return (
		<>
	    <section id="counts" className="counts">
	      <div className="container">
          <div className="section-title mb-5">
            <h2>Awards</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
	        <div className="row">
            {cardData?.map((item) =>
               <Card  item={item} />
            )}
          </div>
         </div>
    </section>	
		</>
	)
}

export default Awards;