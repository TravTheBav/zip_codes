import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'
import Layout from "./components/Layout"
import Locations from "./components/Locations"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
