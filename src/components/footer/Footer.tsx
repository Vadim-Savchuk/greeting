import { FC } from 'react'

import style from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <h3 className={style.copy}>&#169; 2023</h3>
            <a href="mailto:vadimsavchuk1999@gmail.com" target='_blank' rel="noopener noreferrer" className={style.link}>Зв'язатись з нами</a>
        </footer>
    )
}

export default Footer;