import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../common/Footer';
import GlobalBackground from './GlobalBackground';
import './PageLayout.css';

export default function PageLayout() {
    return (
        <div className="page-layout">
            <GlobalBackground />
            <Header />
            <main className="page-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
