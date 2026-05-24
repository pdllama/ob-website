
import { createBrowserRouter, Outlet } from "react-router";
import Root from "./routes/root/root";
import NavBar from "./partials/nav";
import Footer from "./partials/footer";
import UnknownPage from "./routes/unknown/unknown";

function AppLayout({}) {
    return (
        <>
            <NavBar/>
                <Outlet/>
            <Footer/>
        </>
    )
}

const router = createBrowserRouter([
    {
        Component: AppLayout,
        children: [
            {index: true, Component: Root},
            {path: "*", Component: UnknownPage}
        ]
    }
])

export default router
