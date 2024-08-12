import Card from "../components/Card"; // Assurez-vous que le chemin est correct
import logements from "../data/logements.json"; // Assurez-vous que le chemin est correct

const CardContainer = () => {
  return (
    <div className="card-container">
      {logements.map((logement, index) => (
        <Card
          key={index}
          title={logement.title}
          cover={logement.cover} 
        />
      ))}
    </div>
  );
};
export default CardContainer;
