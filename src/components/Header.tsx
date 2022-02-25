import React, { SyntheticEvent } from "react";
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
  const onClick = (ev: SyntheticEvent) => {
    console.log(ev);
    console.log("click");
  };

  return (
    <header className="header">
      <h1 className="header">{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={(ev) => onAdd()}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
