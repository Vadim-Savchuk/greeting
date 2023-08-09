import { useLocation } from 'react-router-dom';

import style from './NotPage.module.scss';

import notPageImg from '../../img/error-404.png';

const NotPage = () => {
    const { pathname } = useLocation();

    return (
        <section className={style.notPage}>
            <img src={notPageImg} alt="Error not found page" />
            <h4>Сторінки з таким шляхом не існує {pathname}</h4>
        </section>
    )
}

export default NotPage;