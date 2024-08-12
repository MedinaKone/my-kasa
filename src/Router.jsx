import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Logement from "./pages/Logement";


const Router = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/logement" element={<Logement/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
            </>    
            )
}

export default Router; 