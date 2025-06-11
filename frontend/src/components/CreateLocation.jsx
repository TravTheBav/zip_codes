import { useState } from "react"
import { useNavigate } from "react-router"

function CreateLocation() {
    const redirect = useNavigate()

    const [zip, setZip] = useState(0)
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [county, setCounty] = useState("")
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    const createLocation = async (event) => {
        // prevent the default form submission
        event.preventDefault()

        // data to pass to the backend server
        const locationData = {
            zip: zip,
            city: city,
            state: state,
            county: county,
            latitude: latitude,
            longitude: longitude
        }

        // send the locationData object to the post endpoint
        try {
            const response = await fetch("/locations", {
                method: "post",
                body: JSON.stringify(locationData),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.status === 201) {
                alert("Location was added.")
                redirect("/")
            } else {
                alert(`Could not create the location: ${response.status} - ${response.statusText}.`)
            }
        } catch {
            alert("Carvant server is currently down, try again later.")
        }
    }

    return (
        <>
        <h2>Add a Location</h2>
        <form onSubmit={createLocation}>
            <div>
                <label htmlFor="zip">Zip:</label>
                <input type="number" id="zip" value={zip} onChange={e => setZip(e.target.value)}/>
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
            <button type="submit">Create</button>
        </form>
        </>
    )
}

export default CreateLocation