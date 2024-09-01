import Card from "../components/Card";
import Banner from "../components/Banner";
import logements from "../data/logements.json"; // Assurez-vous que le chemin est correct
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main-home">
        <Banner type="home" />
        <section className="card-section">
          <div className="card-container">
            <Card logements={logements} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
