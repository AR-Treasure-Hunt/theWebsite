import TestimonialModal from "@/sections/LandingSection/components/TestimonialsSection/TestimonialModal";

export default function TestimonialsSection() {
    return (
        <div className="flex flex-col gap-[24px] ">
            <h1 className="text-[48px] md:text-[72px] leading-9 font-normal text-white">Let's hear from the <span className="text-gold">past participants</span>!</h1>
            <div className="flex gap-[16px] flex-wrap justify-center ">
            <TestimonialModal img="" testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore incidunt cupiditate laboriosam optio porro quaerat, dolores, eius aliquam perferendis corporis, suscipit nobis. Sequi modi corrupti provident minima nesciunt! Totam, officiis." name="Bibhusan Saakha"/>
            <TestimonialModal img="" testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore incidunt cupiditate laboriosam optio porro quaerat, dolores, eius aliquam perferendis corporis, suscipit nobis. Sequi modi corrupti provident minima nesciunt! Totam, officiis." name="Bibhusan Saakha"/>
            <TestimonialModal img="" testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore incidunt cupiditate laboriosam optio porro quaerat, dolores, eius aliquam perferendis corporis, suscipit nobis. Sequi modi corrupti provident minima nesciunt! Totam, officiis." name="Bibhusan Saakha"/>
            <TestimonialModal img="" testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore incidunt cupiditate laboriosam optio porro quaerat, dolores, eius aliquam perferendis corporis, suscipit nobis. Sequi modi corrupti provident minima nesciunt! Totam, officiis." name="Bibhusan Saakha"/>
            </div>
        </div>
    )
}