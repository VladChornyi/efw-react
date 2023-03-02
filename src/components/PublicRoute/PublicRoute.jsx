import {useSelector} from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {

    const token = useSelector(state=> state.auth.access_token);
    return token ? <Navigate to="/"/> : <Outlet/> 
 }