import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../pages/Dashboard/DashboardNav';
import DashboardDrawer from '../pages/Dashboard/DashboardDrawer';

const Dashboard = () => {
    return (
        <div className='bg-[#f1f6fa]'>
            <div className='flex'>
                <DashboardDrawer />

                <main className='w-full bg-grange mx-6'>
                    <DashboardNav />
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;