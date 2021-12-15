import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Layoutadmin = () => {
    return (
        <div>
            <div>
                ADMIN
                <Outlet />
            </div>
        </div>
    );
}

export default Layoutadmin;