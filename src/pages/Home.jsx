import Card from "../components/Card";
import FirstSection from "../components/FirstSection"
import logements from "../data/logements.json"; // Assurez-vous que le chemin est correct


const Home = ()=> {
    return(
        <section className="main-content">
       <FirstSection /> 
       <div className="card-container">

       <Card logements={logements}/>
       </div>
       </section>
    )
}

export default Home