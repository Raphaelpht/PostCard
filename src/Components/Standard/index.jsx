import Banner from "Components/Banner";
import { Outlet } from "react-router-dom";

function Standard({ children }) {
    return (
        <main>
            <Banner/>
            <Outlet/>
            {children}
        </main>
    )
}

export default Standard