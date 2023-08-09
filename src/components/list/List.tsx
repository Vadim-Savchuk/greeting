import { FC } from "react";

import style from './List.module.scss';

interface ListProps {
    data: string[];
}

const List: FC<ListProps> = ({ data }) => {

    return (
        <ul className={style.list}>
            {data.map((elem, index) => {
                return <li key={index} className={style.elem}>{elem}</li>
            })}
        </ul>
    )
}

export default List;