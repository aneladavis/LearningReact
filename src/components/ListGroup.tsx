// import { MouseEvent } from "react";

import { useState } from "react";
// { items: [], heading: string }

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (items: string) => void;
}
function listGroup({ items, heading, onSelectItem }: Props) {
  //   let selectedCity = -1;
  // Hook
  const [selectedItem, setSelectedItem] = useState(-1);

  const message = items.length === 0 && <p>No item found</p>;
  // Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);s
  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default listGroup;
