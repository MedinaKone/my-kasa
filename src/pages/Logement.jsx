import Logements from "../data/logements.json";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";
import Stars from "../components/stars";
import Host from "../components/Host";
import Error from "../pages/Error";
import Carrousel from "../components/Carrousel";

const Logement = () => {
  const { id } = useParams();

  const logement = Logements.find((logement) => logement.id === id);

  if (!logement) {
    return <div><Error /></div>;
  }

  const images = logement.pictures || [logement.picture];


  return (
    <>
      <Header />
      <div className="main-logement">
      <Carrousel images={images} />
        <div className="logement-header">
          <div className="logement-info">
            <h2 className="logement-title">{logement.title}</h2>
            <p className="logement-location">{logement.location}</p>
          </div>
          <div className="logement-host">
          <Host name={logement.host.name} picture={logement.host.picture} />
          </div>
        </div>
        <div className="tags-and-stars">
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
          <div className="logement-stars">
            <Stars rating={parseInt(logement.rating)} />{" "}
          </div>
          <div className="logement-stars-host-mobile">
          <Stars rating={parseInt(logement.rating)} />{" "}
          <Host name={logement.host.name} picture={logement.host.picture} />
          </div>
        </div>
        <div className="logement-infos">
          <Collapse
            item={{ title: "Description", description: logement.description }}
            className="logement-description"
          />
          <Collapse
            item={{
              title: "Equipements",
              description: (
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              ),
            }}
            className="logement-equipements"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Logement;
