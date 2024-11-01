import TestimonialModal from '@/sections/LandingSection/components/TestimonialsSection/TestimonialModal';
import { TESTIMONIALS } from './TestimonialConts';

export default function TestimonialsSection() {
  return (
    <div className="flex flex-col gap-[24px] mb-14">
      <h1 className="text-5xl md:text-7xl mx-auto font-normal text-white">
        Let's hear from the <span className="text-gold">past participants</span>!
      </h1>
      <div className="flex gap-8 justify-around flex-wrap">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialModal
            key={testimonial.id}
            img={testimonial.img}
            testimonial={testimonial.testimonial}
            name={testimonial.name}
          />
        ))}
      </div>
    </div>
  );
}
