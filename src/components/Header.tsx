import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({
  title,
  onAdd,
  showAdd,
}: {
  title: string;
  onAdd: () => void;
  showAdd: boolean;
}) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1 className="header">{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={(ev) => onAdd()}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
