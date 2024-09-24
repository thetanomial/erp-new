import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const ServiceValidator = ({ service, children }) => {
    const { state } = useContext(AuthContext);
  
    // Check if the user has opted for the service
    const hasService = state.currentUser.services.includes(service);
  
    if (!hasService) {
      // Show a toast if the service is not available
      toast.warn("You have not opted for this service");
      return <Navigate to="/user-dashboard" replace />;  // Render nothing if the user does not have the service
    }
  
    // Render the children if the service is available
    return <>{children}</>;
  };
  
  export default ServiceValidator;