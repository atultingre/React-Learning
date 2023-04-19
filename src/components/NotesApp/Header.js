import React from "react";

const Header = (props) => {
  const { title } = props;
  return (
    <header className="header">
      <h1>{title} List</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Shopping",
};
export default Header;
