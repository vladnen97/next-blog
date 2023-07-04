import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';

const MainContainer = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <footer>@ footer next.js</footer>
        </>
    );
};

export default MainContainer;