import React, { useState } from "react";
import { Home, Sidebar, Chat } from "./components";
import { Header } from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <Header />
      <Home />
      <Chat />
    </div>
  );
}

export default App;
