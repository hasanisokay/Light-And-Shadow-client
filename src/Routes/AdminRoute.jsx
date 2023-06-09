import { Navigate, useLocation } from 'react-router-dom';
import Lottie from "lottie-react";
import loadingJson from "../assets/loading.json"
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin();

    // console.log(location);
    const { user, loading } = useAuth()
    if (loading || isAdminLoading) {
        return <Lottie className='w-60 pt-20 h-72 mx-auto' animationData={loadingJson} loop={true} />;
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={location} replace></Navigate>
};

export default AdminRoute;