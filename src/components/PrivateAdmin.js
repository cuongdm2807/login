import { Navigate } from "react-router";
import { isAuthenticate } from "./Authenticate"

const PrivateAdmin = ({ children }) => {
    const auth = isAuthenticate();
    if (!auth || auth.id !== 1) {
        return <Navigate to="/" />
    }
    return children
}
export default PrivateAdmin