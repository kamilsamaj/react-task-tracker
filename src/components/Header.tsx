import React from "react";
import Button from "./Button";

const Header = ({ title }: { title: string }) => {
  const onClick = (ev: any) => {
    console.log(ev);
    console.log("click");
  };

  return (
    <header className="header">
      <h1 className="header">{title}</h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
