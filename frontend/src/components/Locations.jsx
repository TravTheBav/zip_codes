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

    // called whenever the delete icon for a location row is clicked
    // deletes the location and updates the table to reflect the changes
    const onDeleteLocation = async (location) => {
        // let user know that this action cannot be undone
        const confirmation = confirm(
            "Are you sure you want to delete this location? This action cannot be undone."
        )

        if (confirmation) {
            const _id = location.LocationID
            const response = await fetch(`/locations/${_id}`, { method: "DELETE" })

            if (response.status === 200) {
                const getResponse = await fetch("/locations")
                const locations = await getResponse.json()
                alert("Location was successfully deleted.")
                setLocations(locations)
            } else {
                console.error(`Could not delete the location, status code: ${response.status}`)
            }
        }
    }

    // only gets called on page load
    useEffect(() => {
        loadLocations()
    }, [])

    return (
        <>
        <h1>Locations</h1>
        <button onClick={() => {redirect("/create-location")}}>Add Location</button>
        <LocationsTable locations={locations} onEdit={onEditLocation} onDelete={onDeleteLocation}/>
        </>
    )
}

export default Locations