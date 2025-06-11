import { Outlet } from "react-router"
import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"

function Layout() {
    return (
        <>
        <SiteHeader />
        <main>
            <Outlet />
        </main>
        <SiteFooter />
        </>
    )
}

export default Layout