
import { createBrowserRouter, Outlet } from "react-router";
import Root from "./routes/root";
import NavBar from "./partials/nav";
import Footer from "./partials/footer";

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

        ]
    }
])

export default router
