import { FC } from 'react'

import List   from '../../components/list/List';
import Banner from '../../components/baner/Banner';

import happyBirthdaySmilesList from '../../data/happyBirthdaySmilesList';

import happyBirthdaySmileImg from '../../img/smile.png';

const BirthdaySmilesPage: FC = () => {
    return (
        <section>
            <Banner img={happyBirthdaySmileImg} title={'Найкращі привітання з днем народження зі смайлами'} />
            <List data={happyBirthdaySmilesList} />
        </section>
    )
}

export default BirthdaySmilesPage

