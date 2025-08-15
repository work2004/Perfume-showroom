import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function Protect_router() {
  const token = localStorage.getItem("authToken"); // ya jo bhi tum use kar rahe ho
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
