import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const [isInstructor, isInstructorLoading] = useInstructor()
    console.log("admin", isAdmin);
    console.log("instructor", isInstructor);
    return (
        <div className='pt-20'>
              <Helmet>
                <title>Light & Shadow | Dashboard</title>
            </Helmet>
            
            
        </div>
    );
};

export default Dashboard;