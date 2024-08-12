import Navbar from "./components/Navabr";
import Router from "./Router";
import logo from "./assets/LOGO.svg";
import logoWhite from "./assets/Logo-white.png"

function App() {
  return (
    <div className="App">
      <div className="banner">
        <img src={logo} alt="Logo" />
        <Navbar />
      </div>
      <Router />
      <div className="footer">
      <img src={logoWhite} alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
