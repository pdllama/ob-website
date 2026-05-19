
import { createBrowserRouter } from "react-router";
import Root from "./routes/root";

const browser = createBrowserRouter([
    {
        path: "/",
        element: <Root/>
    }
])