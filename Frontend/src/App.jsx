import "./App.css"
import Add from "./Add"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Page from "./Page"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/phonebook" element={<Page />} />
        <Route path="/add/contact" element={<Add />} />
      </Routes>
    </>
  )
}
export default App