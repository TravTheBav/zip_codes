import { FaCar } from "react-icons/fa"
import { useNavigate } from "react-router"

function SiteHeader() {
    const redirect = useNavigate()

    return (
        <header>
            <i className="siteLogo">
                <FaCar onClick={() => {redirect("/")}} />
            </i>
            <h1>
                Zip Code Finder
            </h1>
        </header>
    )
}

export default SiteHeader