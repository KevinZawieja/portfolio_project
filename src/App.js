import React from "react";
import "./home.scss";
import Home from "./Home";

function App() {
  return (
    <div className="my-id w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-black relative">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
    </div>
  );
}

export default App;
