import { FC } from 'react'

import style from './Banner.module.scss';

interface BannerProps {
    img: string,
    title: string,
}

const Banner: FC<BannerProps> = ({ img, title }) => {
    return (
        < div className={style.banner} >
            <h1 className='hero-title'>{title}</h1>
            <div className={style.offer}>
                <img src={img} alt="Happy birthday" />
            </div>
        </ div >
    )
}

export default Banner;