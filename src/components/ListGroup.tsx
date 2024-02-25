import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading}: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>{ heading }</h1>
      {items.length === 0 && <p>No Projects Currently In Development</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => setSelectedIndex(index)}
            className={ selectedIndex === index ? "list-group-item active" : "list-group-item"}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
