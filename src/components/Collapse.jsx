import { useState } from "react";
import arrowUp from "../assets/arrow_up.png"
import arrowDown from "../assets/arrow_down.png"

const Collapse = ({item, className}) => {
  const [selected, setSelected] = useState(false);

  const toggleOpen = ()=> {
    setSelected (!selected)
  }


  return (
    <div className={`wrapper ${className}`}>
      <div className="accordion">
          <div className="item">
            <div className="title" onClick={toggleOpen}>
              <h2>{item.title}</h2>
              <img
              src={selected ? arrowUp : arrowDown}
              alt={selected ? "Flèche vers le haut" : "Flèche vers le bas"}
              />
            </div>
            <div className={selected ? "content show" : "content"}>
              {item.description}
            </div>
          </div>
      </div>  
    </div>
  );
};



export default Collapse;
