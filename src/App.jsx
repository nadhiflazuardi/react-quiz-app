// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
import Quiz from "./Components/Quiz/Quiz";

const App = () => {
  return (
    <div className="m-0 h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
      <Quiz />
    </div>
  );
};

export default App;
