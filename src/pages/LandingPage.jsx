import React from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import ServicesSection from '../components/ServicesSection'
import BenefitsSection from '../components/BenefitsSection'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQs from '../components/FAQs'


export const LandingPage = () => {
    return (
        <div className="w-full flex flex-col">
            <NavBar/>
            <HeroSection />
            <BenefitsSection/>
            <AboutUs/>
            <TestimonialsSection/>
            <FAQs/>
            <ServicesSection/>
            <Footer/>
        </div>
    )
}
