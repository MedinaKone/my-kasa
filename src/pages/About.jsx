import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Banner type="about" />
        <section className="main-content">
          <Collapse />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
