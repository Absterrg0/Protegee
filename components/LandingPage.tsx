'use client'

import React, { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Spotlight } from "./ui/spotlight"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github,Check, ChevronRight, Twitter, Linkedin, Mail } from "lucide-react"
import { Card } from "./ui/meteorCard"

export default function LandingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const homeRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* Navbar */}
      <motion.nav 
        className="fixed top-0 w-full backdrop-blur-md bg-black/[0.7] border-b border-gray-800 z-20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-white font-bold text-2xl">Protegee AI</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection(homeRef)} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection(featuresRef)} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</button>
                <button onClick={() => scrollToSection(pricingRef)} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</button>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <span className="text-gray-400 text-sm mr-2">Backed by</span>
              <img src="Ycombi.png" alt="Y Combinator" className="w-24" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.div 
        ref={homeRef}
        className="min-h-screen flex flex-col relative"
        style={{ opacity, scale }}
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <motion.main 
          className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight"
              variants={fadeInUp}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                Protegee AI
              </span>
            </motion.h1>

            <motion.p 
              className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Building AI Agents? We enable seamless payments for your AI-powered solutions.
            </motion.p>

            <motion.div 
              className="mt-10 max-w-md mx-auto"
              variants={fadeInUp}
            >
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3 bg-neutral-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600"
                  required
                />
                <Button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-semibold shadow-lg transition-all duration-300"
                >
                  Join Waitlist
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.main>

        <motion.div 
          className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
          animate={{
            x: [-200, 0],
            y: [-200, -100],
            scale: [0.8, 1, 0.8],
            rotate: [0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          style={{ right: -100, bottom: -100 }}
          animate={{
            x: [100, 0],
            y: [100, 0],
            scale: [1, 0.8, 1],
            rotate: [0, -90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      {/* Features Section */}
{/* Features Section */}
<motion.section 
      ref={featuresRef}
      className="py-24 px-6 lg:px-8 bg-gradient-to-t from-neutral-900 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
>
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Protegee AI?</h2>
    <Card /> {/* Using the MeteorsDemo component here */}
  </div>
</motion.section>


      {/* How It Works Section */}
      <motion.section 
        className="py-24 px-6 lg:px-8 bg-gradient-to-b from-neutral-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">How It Works</h2>
          <motion.div 
            className="w-full max-w-[90vw] mx-auto"
            variants={fadeInUp}
          >
            <div className="aspect-w-16 aspect-h-9">
              <video 
                className="w-full h-full"
                poster="thumb-0.webp" 
                title="Product Demo"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Redesigned Pricing Section */}
      <motion.section
      ref={pricingRef}
      className="py-24 px-6 lg:px-8 bg-gradient-to-t from-neutral-900 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Plan</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              name: "Starter",
              price: "$99",
              period: "/month",
              features: ["100 AI Agent Transactions", "Basic Analytics", "Email Support", "API Access","API Access"],
              cta: "Get Started",
              popular: false,
            },
            {
              name: "Pro",
              price: "$299",
              period: "/month",
              features: ["1,000 AI Agent Transactions", "Advanced Analytics", "Priority Support","Custom Integrations","API Access",],
              cta: "Go Pro",
              popular: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              features: ["Unlimited AI Agent Transactions", "Enterprise Analytics", "24/7 Dedicated Support", "API Access", "On-Premise Deployment"],
              cta: "Contact Us",
              popular: false,
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-lg border ${plan.popular ? 'border-blue-500' : 'border-gray-800'}`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-tr-lg rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{plan.name}</h3>
              <p className="text-4xl font-bold text-white mb-6 text-center">
                {plan.price}<span className="text-xl font-normal text-gray-400">{plan.period}</span>
              </p>
              <ul className="text-gray-400 mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center"> {/* Center the button */}
                <Button
                  className={`w-full py-3 rounded text-white font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>

      {/* Redesigned Footer */}
      <motion.footer 
        className="bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Protegee AI</h3>
            <p className="text-sm text-gray-400">Empowering AI agents with seamless payment solutions. Join us in shaping the future of autonomous transactions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © 2024 Protegee AI. All rights reserved. | Backed by Y Combinator
        </div>
      </motion.footer>
    </div>
  )
}