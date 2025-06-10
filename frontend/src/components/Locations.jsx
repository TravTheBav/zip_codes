import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import LocationsTable from "./LocationsTable"

function Locations() {
    const redirect = useNavigate()
    const [locations, setLocations] = useState([])

    // calls the backend server to get all locations
    const loadLocations = async () => {
        const response = await fetch("/locations")
        const locations = await response.json()
        setLocations(locations)
    }

    // only gets called on page load
    useEffect(() => {
        loadLocations()
    }, [])

    return (
        <>
        <h1>Locations</h1>
        <LocationsTable locations={locations}/>
        </>
    )
}

export default Locations