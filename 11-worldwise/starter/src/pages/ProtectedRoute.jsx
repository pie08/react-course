import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();

  return isAuth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
