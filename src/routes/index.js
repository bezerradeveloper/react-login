import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pg1 from "../pages/Pg1";
import Pg2 from "../pages/Pg2";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";


const Private = ({ Item }) => {

    const { signed } = useAuth(); 

    return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} /> } />
                    <Route exact path="/pg1" element={<Private Item={Pg1} /> } />
                    <Route exact path="/pg2" element={<Private Item={Pg2} /> } />
                    <Route path="/" element={<Signin />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;