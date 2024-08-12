import "../styles/card.scss";

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={cover} alt={cover} className="card-cover" />
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
