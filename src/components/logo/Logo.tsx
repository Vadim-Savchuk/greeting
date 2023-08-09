import { FC } from 'react'

import style from './Logo.module.scss';

const Logo: FC = () => {
    return (
        <h3 className={style.logo}>
            <span className={style.blue}>Свої</span>
            <span className={style.yellow}>привітання</span>
        </h3>
    )
}

export default Logo;