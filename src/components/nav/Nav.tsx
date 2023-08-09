import { FC }                   from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import routes from '../../routes/routes';

import style from './Nav.module.scss';

const Nav: FC = () => {
    const { pathname } = useLocation();

    return (
        <nav>
            <ul className={style.navLinks}>
                {routes.map(route => {
                    return (
                        <li key={route.to}>
                            <NavLink to={route.to} className={pathname === route.to && style.active}>
                                {route.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default Nav;