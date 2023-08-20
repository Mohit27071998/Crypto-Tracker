import React from 'react'
import Hero from '../components/LandingPage/MainComponent/Hero';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Footer />
        </React.Fragment>
    )
}

export default Home;