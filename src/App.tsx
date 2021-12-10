import React, { useEffect } from 'react';
import AOS from 'aos';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';



export default function App() {
    useEffect(() => {
        AOS.init({
            useClassNames: true,
            duration: 900,
            once: true
        });
    }, []);

    return (
        <main className="bg-stars">
            <Navigation />
            <Hero />
            <Portfolio />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </main>
    );
}