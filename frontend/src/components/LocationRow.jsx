import { LiaEdit } from "react-icons/lia"

function LocationRow({ location, onEdit }) {
    return (
        <tr>
            <td>{location.LocationID}</td>
            <td>{location.Zip}</td>
            <td>{location.City}</td>
            <td>{location.State}</td>
            <td>{location.County}</td>
            <td>{location.Latitude}</td>
            <td>{location.Longitude}</td>
            <td>
                <i><LiaEdit onClick={() => {onEdit(location)}}/></i>
            </td>
        </tr>
    )
}

export default LocationRow