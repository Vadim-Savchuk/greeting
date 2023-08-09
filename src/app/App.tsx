import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage                         from '../pages/homePage/HomePage';
import BirthdayOurWordsPage             from '../pages/birthdayOurWordsPage/BirthdayOurWordsPage';
import BirthdaySmilesPage               from '../pages/birthdaySmilesPage/BirthdaySmilesPage';
import HappyBirthdayFromInfluencersPage from '../pages/happyBirthdayFromInfluencersPage/HappyBirthdayFromInfluencersPage';
import HappyBirthdayPoemsPage           from '../pages/happyBirthdayPoemsPage/HappyBirthdayPoemsPage';
import NotPage                          from '../pages/notPage/NotPage';

import Loyout from "../components/loyout/Loyout";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Loyout>
                <Routes>
                    <Route path='/'           element={<HomePage />} />
                    <Route path='/words'      element={<BirthdayOurWordsPage />} />
                    <Route path='/smile'      element={<BirthdaySmilesPage />} />
                    <Route path='/influencer' element={<HappyBirthdayFromInfluencersPage />} />
                    <Route path='/poem'       element={<HappyBirthdayPoemsPage/>} />
                    <Route path='*'           element={<NotPage/>} />
                </Routes>
            </Loyout>
        </BrowserRouter>
    );
}

export default App;
