import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-10 m-auto pt-lg-0 pt-sm-5">
      <div className="count-box">
        <Link to={item.route ? item.route : ""} style={{color: 'black',textDecoration: 'none'}}>
          <i className={item?.icon}></i>
          <h4 className="font-weight-bold">{item?.title}</h4>
          <p>{item?.description}</p>
        </Link>
      </div>
    </div>
  );
}

export default Card;
