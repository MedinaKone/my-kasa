import Logements from "../data/logements.json";

const Logement = () => {
    return (
        <div>
            {Logements.map((logement) => (
                <div key={logement.id}>
                    <h2>{logement.title}</h2>
                    <p>{logement.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Logement;
