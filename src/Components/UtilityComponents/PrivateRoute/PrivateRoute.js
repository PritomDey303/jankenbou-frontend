import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
export default function PrivateRoute({ children }) {
  let { user, loading } = useUserAuth();
  // console.log(user, loading);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
}
