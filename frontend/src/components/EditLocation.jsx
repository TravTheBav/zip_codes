import { useState } from "react"
import { useNavigate } from "react-router"

function EditLocation({ location }) {
    const redirect = useNavigate()

    const [locationID, setLocationID] = useState(location.LocationID)
    const [zip, setZip] = useState(location.Zip)
    const [city, setCity] = useState(location.City)
    const [state, setState] = useState(location.State)
    const [county, setCounty] = useState(location.County)
    const [latitude, setLatitude] = useState(location.Latitude)
    const [longitude, setLongitude] = useState(location.Longitude)

    const editLocation = async (event) => {
        // prevent the default form submission
        event.preventDefault()

        // data to pass to the backend server
        const locationData = {
            locationID: locationID,
            zip: zip,
            city: city,
            state: state,
            county: county,
            latitude: latitude,
            longitude: longitude
        }

        // send the locationData object to the put endpoint
        try {
            const response = await fetch("/locations", {
                method: "put",
                body: JSON.stringify(locationData),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.status === 200) {
                alert("Location was updated.")
                redirect("/")
            } else {
                alert(`Could not update the location: ${response.status} - ${response.statusText}.`)
            }
        } catch {
            alert("Carvant server is currently down, try again later.")
        }
    }

    return (
        <>
        <h2>Edit Location: id #{location.LocationID}</h2>
        <form onSubmit={editLocation}>
            <div>
                <label htmlFor="zip">Zip:</label>
                <input type="number" id="zip" value={zip} onChange={e => setZip(e.target.value)} />
            </div>
            <div>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" value={city} onChange={e => setCity(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="state">State:</label>
                <input type="text" id="state" value={state} onChange={e => setState(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="county">County:</label>
                <input type="text" id="county" value={county} onChange={e => setCounty(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="latitude">Latitude:</label>
                <input type="number" id="latitude" value={latitude} onChange={e => setLatitude(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="longitude">Longitude:</label>
                <input type="number" id="longitude" value={longitude} onChange={e => setLongitude(e.target.value)}/>
            </div>
            <button type="submit">Update</button>
        </form>
        </>
    )
}

export default EditLocation