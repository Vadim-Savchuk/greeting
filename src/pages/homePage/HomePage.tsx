import { FC } from 'react'

import List   from '../../components/list/List';
import Banner from '../../components/baner/Banner';

import happyBirthdayList from '../../data/happyBirthdayList';

import happyBirthdayImage from '../../img/happy-birthday.png';

const HomePage: FC = () => {
    return (
        <section>
            <Banner img={happyBirthdayImage} title={'Найкращі привітання з днем народження'} />
            <List data={happyBirthdayList} />
        </section>
    )
}

export default HomePage