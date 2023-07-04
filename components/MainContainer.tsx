import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';

const MainContainer = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
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