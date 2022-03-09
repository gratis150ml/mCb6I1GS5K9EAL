import Join from "./Join";
import Create from "./Create";
import { render } from "react-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
export default function Home() {
    return (
    <Router>
        <Routes>
            <Route index path="/" element={<p>Home page</p>}/>
            <Route path="/join" element={<Join />}/>
            <Route path="/create" element={<Create />}/>
        </Routes>
    </Router>
    )
}