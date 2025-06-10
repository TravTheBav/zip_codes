import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'
import Layout from "./components/Layout"
import Locations from "./components/Locations"
import CreateLocation from "./components/CreateLocation"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Locations />} />
          <Route path="create-location" element={<CreateLocation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
