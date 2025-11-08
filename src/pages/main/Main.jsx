import React from "react";
import { tv } from "tailwind-variants";



const Main = () => {
  return (
    <div
      className={tv({
        base: "text-3xl font-bold underline",
      })}
    >
      Main
    </div>
  );
};

export default Main;
