import { Outlet } from "react-router"
import SiteHeader from "./SiteHeader"

function Layout() {
    return (
        <>
        <SiteHeader />
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default Layout