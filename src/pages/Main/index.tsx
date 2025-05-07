import {Outlet} from "react-router-dom";

const Main = () => {

    return (
        <div style={{height: '100%'}}>
            <Outlet/>
        </div>
    )

}

export default Main;