import { TestimonialModalProps } from '../../sections/LandingSection/components/TestimonialsSection/TestimonialModal'
import TestimonialImage from '../../assets/Image/testimonial-Img.png'

interface ImageContainerProps extends  Pick <TestimonialModalProps, 'img'> {}

const ImageContainer = (props: ImageContainerProps) => {
    // Props goes here
    const { img } = props;

  return (
    <div className='relative mb-[16px]'>
        <img src={img ? img : TestimonialImage} className='rounded-[16px]'/>
    </div>
  )
}

export default ImageContainer