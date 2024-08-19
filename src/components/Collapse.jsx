import { useState } from "react";

const Collapse = ({item}) => {
  const [selected, setSelected] = useState(false);

  const toggleOpen = ()=> {
    setSelected (!selected)
  }


  return (
    <div className="wrapper">
      <div className="accordion">
          <div className="item">
            <div className="title" onClick={toggleOpen}>
              <h2>{item.title}</h2>
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
