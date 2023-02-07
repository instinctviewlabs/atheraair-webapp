import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Lib/Contexts/AuthContext";

export default function ProtectedRoutes(){
    const user = useAuth();

    return user.token && user.role === "user" ? <Outlet/> : <Navigate to="/login"/>
}