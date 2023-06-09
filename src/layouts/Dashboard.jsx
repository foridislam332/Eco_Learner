import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../pages/Dashboard/DashboardNav';

const Dashboard = () => {
    return (
        <div className='bg-[#f1f6fa]'>
            <div className='flex'>
                <div className='w-72 h-screen bg-green'>

                </div>
                <main className='w-full bg-grange mx-6'>
                    <DashboardNav />
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;