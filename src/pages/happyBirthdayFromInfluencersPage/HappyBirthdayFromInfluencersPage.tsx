import { FC } from 'react'

import List   from "../../components/list/List"
import Banner from "../../components/baner/Banner";

import happyBirthdayFromInfluencersList from "../../data/happyBirthdayFromInfluencersList"

import happyBirthdayFromInfluencersImg from '../../img/influencer.png';

const HappyBirthdayFromInfluencersPage: FC = () => {
    return (
        <section>
            <Banner img={happyBirthdayFromInfluencersImg} title={'Найкращі привітання з днем народження від відомих людей'} />
            <List data={happyBirthdayFromInfluencersList} />
        </section>
    )
}

export default HappyBirthdayFromInfluencersPage