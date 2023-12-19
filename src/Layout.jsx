import { Outlet } from "react-router-dom";
import Header from "./HeaderPage";

export default function Layout() {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}