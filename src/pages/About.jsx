import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse"

const About = ()=> {
    return(
       <>
       <Header /> 
       <section className="main-content">
       <Banner type="about" />
       <Collapse />
       </section>
        <Footer />
        </>
    )
}

export default About