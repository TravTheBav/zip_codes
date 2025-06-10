import LocationRow from "./LocationRow"

function LocationsTable({ locations }) {
    return (
        <>
        <table>
            <thead>
                <th>LocationID</th>
                <th>Zip</th>
                <th>City</th>
                <th>State</th>
                <th>County</th>
                <th>Latitude</th>
                <th>Longitude</th>
            </thead>
            <tbody>
                {locations.map((location, i) => {
                    return <LocationRow location={location} key={i} />
                })}
            </tbody>
        </table>
        </>
    )
}

export default LocationsTable