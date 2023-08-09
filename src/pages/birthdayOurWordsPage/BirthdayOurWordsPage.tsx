import { FC } from 'react'

import List   from '../../components/list/List';
import Banner from '../../components/baner/Banner';

import happyBirthdayOurWordsList from '../../data/happyBirthdayOurWordsList';

import happyBirthdayOurWordsImg from '../../img/happy-birthday1.png';

const BirthdayOurWordsPage: FC = () => {
    return (
        <section>
            <Banner img={happyBirthdayOurWordsImg} title={'Найкращі привітання з днем народження своїми словами'} />
            <List data={happyBirthdayOurWordsList} />
        </section>
    )
}

export default BirthdayOurWordsPage