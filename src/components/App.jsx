import { Navigate, Route, Routes } from "react-router-dom";
import Layaout from "./Layout/Layout";
import { Home } from "../pages/Home/Home";
import Tweets from "../pages/Tweets/Tweets";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layaout />}>
                    <Route index element={<Home />} />
                    <Route path="tweets" element={<Tweets />} />
                    <Route path="*" element={<Navigate to={"/"} />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;