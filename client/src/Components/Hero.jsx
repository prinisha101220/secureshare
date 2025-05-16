import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <section className="bg-white pt-24">  {/* Added padding-top for fixed navbar */}
            <div className="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-[calc(100vh-4rem)] lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-semibold leading-tight sm:text-12xl lg:text-12xl">
                    Unlock the Future of Secure
                        <strong className="block mt-4 font-semibold text-[#10A37F]">
                        Decentralized File Storage
                        </strong>
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                    With SecureShare, your files are more than just data – they’re safe, accessible, and in your control. Say goodbye to centralized storage risks and embrace the power of decentralized file sharing. Whether you're at home, at work, or on the go, SecureShare ensures your files are always within reach, securely stored, and ready when you need them.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-6">
                        <NavLink
                            className="inline-flex items-center rounded-lg bg-[#10A37F] px-8 py-3.5 text-base font-medium text-white hover:bg-[#0c7a5f] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#10A37F] focus:ring-offset-2"
                            to="/upload"
                        >
                            Get Started
                        </NavLink>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero