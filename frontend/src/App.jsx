import { BrowserRouter, Routes, Route } from "react-router"
import { useState } from "react"
import './App.css'
import Layout from "./components/Layout"
import Locations from "./components/Locations"
import CreateLocation from "./components/CreateLocation"
import EditLocation from "./components/EditLocation"


function App() {
  const [location, setLocation] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Locations setLocation={setLocation}/>} />
          <Route path="create-location" element={<CreateLocation />} />
          <Route path="edit-location" element={<EditLocation location={location}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
