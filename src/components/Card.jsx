const Card = ({ logements }) => {
  return (
    <>
    {logements.map((logement) =>(
      <div className="card">
      <div className="card-image-container">
        <img src={logement.cover} alt={logement.title} className="card-cover" />
        <h2 className="card-title">{logement.title}</h2>
      </div>
    </div>

    ))}
    </>
  );
};

export default Card;
