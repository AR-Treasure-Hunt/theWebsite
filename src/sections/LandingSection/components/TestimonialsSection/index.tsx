import TestimonialModal from '@/sections/LandingSection/components/TestimonialsSection/TestimonialModal';
import { TESTIMONIALS } from './TestimonialConts';

export default function TestimonialsSection() {
  return (
    <div className="flex flex-col gap-[24px] ">
      <h1 className="text-[48px] md:text-[72px] leading-9 font-normal text-white">
        Let's hear from the <span className="text-gold">past participants</span>!
      </h1>
      <div className="flex gap-[16px] flex-wrap justify-center ">
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
