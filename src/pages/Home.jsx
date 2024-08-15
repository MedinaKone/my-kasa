import Card from "../components/Card";
import Banner from "../components/Banner"
import logements from "../data/logements.json"; // Assurez-vous que le chemin est correct
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = ()=> {
    return(
        <>
        <Header />

        <section className="main-content">
       <Banner type="home"/> 
       <div className="card-container">

       <Card logements={logements}/>
       </div>
       </section>

       <Footer />
       </>
    )
}

export default Home