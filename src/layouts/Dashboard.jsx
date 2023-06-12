import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../pages/Dashboard/DashboardNav';
import DashboardDrawer from '../pages/Dashboard/DashboardDrawer';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Eco Learner | Dashboard</title>
            </Helmet>
            <div className='bg-[#f1f6fa]'>
                <div className='flex'>
                    <DashboardDrawer />

                    <main className='w-full bg-grange mx-6'>
                        <DashboardNav />
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Dashboard;