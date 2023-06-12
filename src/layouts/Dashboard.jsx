import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../pages/Dashboard/DashboardNav';
import DashboardDrawer from '../pages/Dashboard/DashboardDrawer';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../components/ScrollToTop';

const Dashboard = () => {
    return (
        <>
            <ScrollToTop />
            <Helmet>
                <title>Eco Learner | Dashboard</title>
            </Helmet>
            <div className='bg-[#f1f6fa]'>
                <div className='flex'>
                    <DashboardDrawer />

                    <main className='w-full bg-[#f1f6fa] mx-2 md:mx-6'>
                        <DashboardNav />
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Dashboard;