import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserRoutes(){
    const {auth} = useSelector(data => data.persistedReducer);
    return auth.auth && (auth.role === "user" || auth.role === "admin") ? <Outlet/> : <Navigate to="/login" replace={true}/>
}