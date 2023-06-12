import React from 'react';

// images
import featuresBg from '../../assets/images/features1.jpg';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ title }) => {
    return (
        <div style={{ backgroundImage: `url(${featuresBg})` }} className='bg-fixed bg-cover bg-center bg-no-repeat'>
            <div className='bg-red dark:bg-black opacity-90 pb-10 pt-32 text-center'>
                <h1 className='text-white text-5xl tracking-wider font-medium'>{title}</h1>
                <p className='text-white mt-5'><Link to='/'>Home</Link> / <span className='text-green'>{title}</span></p>
            </div>
        </div>
    );
};

export default Breadcrumbs;