import React from "react";
import Home from "./Home";
import Lines from "./components/home/Lines.js";

function App() {
  return (
    <div className="my-id w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-backgroundColor relative">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center relative z-10">
        <Lines />
        <Home />
      </div>
    </div>
  );
}

export default App;
