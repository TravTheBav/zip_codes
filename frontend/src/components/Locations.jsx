import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import LocationsTable from "./LocationsTable"

function Locations({setLocation}) {
    const redirect = useNavigate()
    const [locations, setLocations] = useState([])

    // calls the backend server to get all locations
    const loadLocations = async () => {
        const response = await fetch("/locations")
        const locations = await response.json()
        setLocations(locations)
    }

    // called whenever the edit icon for a location row is clicked
    // sets the location and redirects to the edit form page
    const onEditLocation = async (location) => {
        setLocation(location)
        redirect("/edit-location")
    }

    // only gets called on page load
    useEffect(() => {
        loadLocations()
    }, [])

    return (
        <>
        <h1>Locations</h1>
        <button onClick={() => {redirect("/create-location")}}>Add Location</button>
        <LocationsTable locations={locations} onEdit={onEditLocation}/>
        </>
    )
}

export default Locations