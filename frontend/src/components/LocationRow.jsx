function LocationRow({ location }) {
    return (
        <tr>
            <td>{location.LocationID}</td>
            <td>{location.Zip}</td>
            <td>{location.City}</td>
            <td>{location.State}</td>
            <td>{location.County}</td>
            <td>{location.Latitude}</td>
            <td>{location.Longitude}</td>
        </tr>
    )
}

export default LocationRow