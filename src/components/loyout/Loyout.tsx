import { FC, ReactNode } from 'react';

import Header from "../header/Header"
import Footer from '../footer/Footer';
import ScrollToTopButton from '../scrollToTop/ScrollToTopButton';

interface LoyoutProps {
    children: ReactNode
}

const Loyout: FC<LoyoutProps> = ({ children }) => {
    return (
        <div className="container">
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTopButton/>
        </div>
    )
}

export default Loyout