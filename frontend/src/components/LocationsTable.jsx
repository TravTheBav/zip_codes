import LocationRow from "./LocationRow"

function LocationsTable({ locations, onEdit, onDelete }) {
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>LocationID</th>
                    <th>Zip</th>
                    <th>City</th>
                    <th>State</th>
                    <th>County</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {locations.map((location, i) => {
                    return <LocationRow location={location} onEdit={onEdit} onDelete={onDelete} key={i} />
                })}
            </tbody>
        </table>
        </>
    )
}

export default LocationsTable