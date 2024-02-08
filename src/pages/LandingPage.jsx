import React from 'react'
import { homepage, landing } from '../assets'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import ServicesSection from '../components/ServicesSection'
import BenefitsSection from '../components/BenefitsSection'
import Footer from '../components/Footer'


export const LandingPage = () => {
    return (
        <div className="w-full flex flex-col">
            <NavBar/>
            <HeroSection />
            <BenefitsSection/>
            <ServicesSection/>
            <Footer/>
        </div>
    )
}
