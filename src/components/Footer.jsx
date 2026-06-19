import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const services = [
  'Property Development',
  'Residential Construction',
  'Commercial Construction',
  'Interior Design & Fit-Out',
  'Renovation & Refurbishment',
  'Turnkey Design & Build Solutions',
  'Real Estate Development',
  'Project Management & Consultancy',
  'Design Coordination & Procurement Management',
]

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Band */}
      <div className="bg-sapphire py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-2">Start a Conversation</p>
            <h3 className="text-white font-bold text-2xl md:text-3xl">
              Let's Build Something Exceptional Together.
            </h3>
          </div>
          <Link
            to="/contact"
            className="border-2 border-white text-white text-xs font-semibold tracking-widest px-10 py-4 hover:bg-white hover:text-sapphire transition-all duration-300 whitespace-nowrap flex items-center gap-2 shrink-0"
          >
            GET IN TOUCH <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 bg-white px-4 py-3 w-fit">
              <img src="/LOGO.png" alt="FORTIS Builders and Developers" className="w-10 h-10 object-contain" />
              <div>
                <div className="font-black text-navy text-xl tracking-widest leading-none">FORTIS</div>
                <div className="text-navy/60 font-medium text-xs tracking-widest leading-tight">BUILDERS AND DEVELOPERS</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A trusted development, construction, interior fit-out, and project management company delivering high-quality projects through engineering excellence, disciplined execution, and long-term value creation.
            </p>
            <div className="flex items-center gap-2 text-white/40 text-xs tracking-wider">
              <MapPin size={12} />
              <span>Headquartered in Karnataka, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-200 text-sapphire">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6 pb-3 border-b border-white/10">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-sapphire rounded-full shrink-0" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6 pb-3 border-b border-white/10">
              Contact Us
            </h4>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin size={16} className="text-sapphire shrink-0 mt-1" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Total Mall, Police Station, opposite to Madiwala,<br />
                  Sidharata Colony, Santhosapuram,<br />
                  Koramangala 2nd Block, Koramangala,<br />
                  Bengaluru, Karnataka 560068
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-sapphire shrink-0" />
                <a href="tel:8971817700" className="text-white/60 text-sm hover:text-white transition-colors">
                  +91 89718 17700
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-sapphire shrink-0" />
                <a href="mailto:info@fortisbuilders.in" className="text-white/60 text-sm hover:text-white transition-colors">
                  info@fortisbuilders.in
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} FORTIS Builders and Developers Pvt Ltd. All rights reserved.</p>
          <p>Bengaluru, Karnataka | India</p>
        </div>
      </div>
    </footer>
  )
}