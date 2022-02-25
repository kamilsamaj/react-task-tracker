import React from "react";
import Tasks from "./components/Tasks";

import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header title="Hello" />
      <Tasks />
    </div>
  );
}

export default App;
