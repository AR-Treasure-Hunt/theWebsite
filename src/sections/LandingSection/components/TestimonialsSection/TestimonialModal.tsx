import ImageContainer from './ImageContainer';

export interface TestimonialModalProps {
  img: string;
  testimonial: string;
  name: string;
}

const TestimonialModal = (props: TestimonialModalProps) => {
  // Props goes here
  const { img, testimonial, name } = props;

  return (
    <div className="w-96 border-black border-solid p-[32px] rounded-[40px] bg-moussaka">
      <ImageContainer img={img} />
      <p className="text-almondine text-lg font-rubik text-justify  mb-1">{testimonial}</p>
      <h2 className="text-[30px] font-normal text-ice-citadel text-end ">- {name}</h2>
    </div>
  );
};

export default TestimonialModal;
