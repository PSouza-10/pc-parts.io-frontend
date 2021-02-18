import React, { useState } from "react"
import { Sidebar, Footer, Card } from "./components"
import { Modal } from "./components/Modal"

function App() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(!openModal)

  return (
    <div className="App">
      <Sidebar />
      <Card />
      <Footer />
      <button onClick={handleOpenModal}>Botão pega no meu pão</button>

      <Modal handleOpenModal={handleOpenModal} visible={openModal} />
    </div>
  )
}

export default App
