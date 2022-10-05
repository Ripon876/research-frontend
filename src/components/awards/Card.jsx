

function Card({item}) {
	return (
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className={item?.icon}></i>
              <h4 className="font-weight-bold" >{item?.title}</h4>
              <p>{item?.description}</p>
            </div>
          </div>
	)
}

export default Card;