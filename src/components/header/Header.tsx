import { FC, useEffect, useState } from 'react';

import Logo from '../logo/Logo';
import Nav  from '../nav/Nav';

import moonLight from '../../img/crescent-moon.png';
import moonDark  from '../../img/half-moon.png';

import style from './Header.module.scss';

const Header: FC = () => {
    const [thema, setThema] = useState(window.localStorage.getItem('thema') || 'light');

    const toggleThema = () => {
        const updatedThema = thema === 'light' ? 'dark' : 'light';
        setThema(updatedThema);

        window.localStorage.setItem('thema', updatedThema);
    }

    useEffect(() => {
        document.body.setAttribute('data-thema', thema)
    }, [thema])


    return (
        <header className={style.header}>
            <div className={style.box}>
                <Logo />
                <img className={style.thema} onClick={toggleThema} src={thema === 'light' ? moonLight : moonDark} alt="Moon" />
            </div>
            <div className={style.offer}>
                <Nav />
            </div>
        </header>
    )
}

export default Header