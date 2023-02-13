import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoutes(){
    const {auth} = useSelector(data => data.persistedReducer);

    return auth.auth && auth.role === "admin" ? <Outlet/> : <Navigate to="/login"/>
}