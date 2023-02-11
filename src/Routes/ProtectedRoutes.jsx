import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoutes(){
    const {auth} = useSelector(data => data);

    return auth.auth && auth.role === "user" ? <Outlet/> : <Navigate to="/login"/>
}