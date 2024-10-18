import ImageContainer from '../../../../components/ui/ImageContainer';

export interface TestimonialModalProps {
  img?: string;
  testimonial: string;
  name: string;
}

const TestimonialModal = (props: TestimonialModalProps) => {
  // Props goes here
  const { img, testimonial, name } = props;

  return (
    <div className='w-[328px] border-black border-solid p-[32px] rounded-[40px] bg-moussaka'>
        <ImageContainer img={img}/>
        <p className='text-almondine mb-[0px]'>{testimonial}</p>
        <h2 className='text-[30px] font-normal text-ice-citadel '>{name}</h2>
    </div>
  )
}

export default TestimonialModal;