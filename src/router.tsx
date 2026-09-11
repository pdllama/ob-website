
import { createBrowserRouter, Outlet } from "react-router";
import Root from "./routes/root/root";
import NavBar from "./partials/nav";
import Footer from "./partials/footer";
import UnknownPage from "./routes/unknown/unknown";
import Projects from "./routes/projects/projects";
import ShowProject from "./routes/projects/showproject";

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
            {path: "projects", children: [
                {index: true, Component: Projects},
                {path: ":project_key", Component: ShowProject}
            ]},
            {path: "*", Component: UnknownPage}
        ]
    }
])

export default router
