import React from "react";
import { AiFillDelete } from "react-icons/ai";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />

      <label
        style={
          item.checked
            ? {
                textDecoration: "line-through",
              }
            : null
        }
        onDoubleClick={() => handleCheck(item.id)}>
        {item.item}
      </label>

      <AiFillDelete
        aria-label={`Delete ${item.item}`}
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};

export default LineItem;
