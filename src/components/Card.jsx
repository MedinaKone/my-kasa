import { Link } from "react-router-dom"

const Card = ({ logement }) => {
  return (
    <>
         <Link to={`/logement/${logement.id}`} 
  className="card">
      <div className="card-image-container">
        <img src={logement.cover} alt={logement.title} className="card-cover" />
        <h2 className="card-title">{logement.title}</h2>
      </div>
    </Link>
    </>
  );
};

export default Card;
