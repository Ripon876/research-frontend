import React from 'react'

function InstitutionCard({item}) {
	return (
          <div className="col-md-3 pb-4">
            <div className="count-box">
              <span><img src={item?.img} className="img-fluid" /></span>
              <h5 className="font-weight-bold">{item?.title}</h5>
            </div>
          </div>
	)
}

export default InstitutionCard;