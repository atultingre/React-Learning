import React from "react";

const ListItem = ({ item }) => {
  return (
    <div>
      <li>{JSON.stringify(item)}</li>
    </div>
  );
};

export default ListItem;
