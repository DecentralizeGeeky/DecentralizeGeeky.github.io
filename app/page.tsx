import Image from 'next/image';
import { ChevronRight, Linkedin, Github } from 'lucide-react';
import TestimonialSlider from './components/TestimonialSlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-green-500 text-white z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Image
            width={45}
            height={45} 
            src="/AdamsGeeky.png"
            className="opacity-30 w-11 h-9"            
            />
          </div>
          <div className="hidden md:flex space-x-4">
            {['Home', 'Services', 'Certifications', 'Testimonials', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-green-200">
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-0 relative bg-green-500 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/engineer.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Unlock Cutting-Edge Solutions with Personalized Research Assistance & IT Consultancy
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            As a seasoned tech professional, I specialize in delivering tailored solutions for your research and business needs.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition duration-300">
              Get in Touch
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-600">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Research Assistance', 'IT Consultancy', 'Tech Solutions'].map((service) => (
              <div key={service} className="border-2 border-green-400 rounded-lg p-6 bg-white hover:bg-green-50 transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-green-600">{service}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-600">Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Certification 1', 'Certification 2', 'Certification 3', 'Certification 4'].map((cert) => (
              <div key={cert} className="text-center">
                <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                  <Image src="/hero.png" alt={cert} width={64} height={64} />
                </div>
                <h3 className="text-lg font-semibold text-green-600">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-green-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-600">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Send Message</button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-green-500 hover:text-green-600">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="text-green-500 hover:text-green-600">
              <Github className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">About Us</h3>
              <p className="text-green-200">Providing top-notch research assistance and IT consultancy services.</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-green-200 hover:text-white">Contact Info</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-green-200">Email: muhadamu0008@gmail.com</p>
              <p className="text-green-200">Phone: (123) 813-3556-494</p>
            </div>
          </div>
          <div className="mt-8 text-center text-green-200">
            <p>&copy; 2024 Adamu Muhammad Muhammad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}