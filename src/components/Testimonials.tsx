import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-animation">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-medium mb-6 text-neutral-900">
            Trusted by leaders
          </h2>
          <p className="text-lg text-neutral-700">
            Don't just take our word for it. Hear what our clients have to say about their experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal-animation">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Quote mark */}
            <div className="absolute top-6 left-8 text-primary-200 text-6xl font-serif">"</div>
            
            {/* Testimonial content */}
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-neutral-800 mb-8 italic">
                {TESTIMONIALS[activeIndex].quote}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={TESTIMONIALS[activeIndex].avatarUrl} 
                  alt={TESTIMONIALS[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-100"
                />
                <div>
                  <h4 className="font-medium text-lg">{TESTIMONIALS[activeIndex].author}</h4>
                  <p className="text-neutral-600">{TESTIMONIALS[activeIndex].role}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute bottom-6 right-8 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-primary-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-primary-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary-500' : 'bg-neutral-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;