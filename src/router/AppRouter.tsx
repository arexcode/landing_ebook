import HomePage from "@/pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={ <HomePage /> } />

            <Route path="/*" element={ <Navigate to={'/'} /> } />
        </Routes>
    )
}
