import React from 'react';
import s from '@/styles/Header.module.css';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Header = () => {
    const router = useRouter()

    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <Link href={'/'} className={router.pathname === '/' ? s.active : null}>Home</Link>
                <Link href={'/photos'} className={router.pathname === '/photos' ? s.active : null}>Photos</Link>
                <Link href={'/users'} className={router.pathname === '/users' ? s.active : null}>Users</Link>
            </nav>
        </header>
    );
};

export default Header;