import { FC } from 'react'

import Banner from "../../components/baner/Banner";
import List   from "../../components/list/List"

import happyBirthdayPoemsList from '../../data/happyBirthdayPoemsList'

import happyBirthdayPoemsImg from '../../img/paper.png';

const HappyBirthdayPoemsPage: FC = () => {
    return (
        <section>
            <Banner img={happyBirthdayPoemsImg} title={'Найкращі привітання з днем народження у віршах'} />
            <List data={happyBirthdayPoemsList} />
        </section>
    )
}

export default HappyBirthdayPoemsPage