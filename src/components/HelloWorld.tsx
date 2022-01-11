import React from "react";
import "../styles/HelloWorld.css";

type Props = {
  children: React.ReactNode;
  title: string;
  theme: "primary" | "secondary";
};

const HelloWorld: React.FC<Props> = ({ children, title, theme }) => {
  return (
    <div>
      <h1 className={`${theme}-title`}>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default HelloWorld;
