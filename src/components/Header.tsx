'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import DarkModeToggle from '@/components/DarkModeToggle'
import SplineModel from '@/components/SplineModel'



const Header = () => {
        const [activeSection, setActiveSection] = useState('home')

        const scrollToSection = (sectionId: string) => {
            const element = document.getElementById(sectionId)
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setActiveSection(sectionId)
            }
        }


    return (
        <div className="flex flex-col bg-background text-foreground">

             {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-10 border-b">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                     {/* Logo */}
                        <div className="text-lg font-bold text-primary dark:text-red-800">
                        itsnirmal
                        </div>

                    {/* Navigation Links */}
                    <ul className="flex space-x-6">
                        {['home', 'projects', 'contact'].map((section) => (
                        <li key={section}>
                            <Button
                            variant="ghost"
                            onClick={() => scrollToSection(section)}
                            className={activeSection === section ? 'text-primary font-bold dark:text-red-800' : ''}
                            >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Button>     
                        </li>
                        ))}
                    </ul>

                    {/* Dark Mode Toggle */}
                    <div>
                        <DarkModeToggle />
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="home" className="pt-32 min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted overflow-y-auto">
                <div className="text-center space-y-6">
                <SplineModel />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Nirmal Gautam
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">Web Developer & Designer</p>
                <Button onClick={() => scrollToSection('projects')} size="lg" className="text-lg transition-transform transform hover:scale-105 dark:bg-red-900 dark:text-white dark:hover:bg-red-800">
                    View My Work
                </Button>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Header