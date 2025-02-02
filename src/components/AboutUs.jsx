import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import executiveImg from '../assets/executive.avif'
import PhoneModal from './PhoneModal'

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full py-12">
      {/* Desktop Version */}
      <div className="hidden md:block container mx-auto px-8 lg:px-24">
        <div className="flex justify-between items-center gap-20">
          {/* Left Content */}
          <div className="w-1/2">
            <h2 className="text-[72px] leading-tight font-['Prosto_One'] font-bold mb-12">About Us</h2>
            <div className="space-y-8">
              <p className="text-gray-600 text-lg leading-relaxed max-w-[600px]">
                We are a dedicated team passionate about delivering exceptional services. With a 
                commitment to innovation, quality, and customer satisfaction, we strive to 
                create meaningful experiences for our clients. Our mission is to your mission 
                statement, ensuring we exceed expectations and build lasting relationships.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm"
              >
                Call us
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-1/2">
            <div className="rounded-tr-[45px] rounded-bl-[45px] overflow-hidden h-[400px]">
              <img 
                src={executiveImg} 
                alt="Executive" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden px-6">
        <div className="flex flex-col space-y-8">
          <h2 className="text-[48px] leading-tight font-['Poppins'] font-bold text-center">About Us</h2>
          
          {/* Mobile Image */}
          <div className="w-full">
            <div className="rounded-tr-[45px] rounded-bl-[45px] overflow-hidden h-[300px]">
              <img 
                src={executiveImg} 
                alt="Executive" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <p className="text-gray-600 text-base leading-relaxed">
            We are a dedicated team passionate about delivering exceptional services. With a 
            commitment to innovation, quality, and customer satisfaction, we strive to 
            create meaningful experiences for our clients. Our mission is to your mission 
            statement], ensuring we exceed expectations and build lasting relationships.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors text-sm w-fit"
          >
            Call us
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <PhoneModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}

export default AboutUs