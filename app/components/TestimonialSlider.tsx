'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    text: "The research assistance provided was invaluable. It significantly accelerated our project timeline.",
    author: "John Doe",
    position: "CEO, Tech Innovators Inc."
  },
  {
    id: 2,
    text: "The IT consultancy services helped us streamline our operations and boost productivity.",
    author: "Jane Smith",
    position: "CTO, Future Systems"
  },
  {
    id: 3,
    text: "The tech solutions implemented were cutting-edge and perfectly tailored to our needs.",
    author: "Mike Johnson",
    position: "Director, Global Solutions"
  }
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-64 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-green-600 p-8 rounded-lg max-w-2xl mx-auto">
            <p className="mb-4 italic text-lg">"{testimonials[currentIndex].text}"</p>
            <p className="font-semibold">{testimonials[currentIndex].author}</p>
            <p className="text-green-200">{testimonials[currentIndex].position}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-green-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}