import React, { useState } from "react";
import { Home, Sidebar, Chat } from "./components";

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <Home />
      <Chat />
    </div>
  );
}

export default App;
