import { TestimonialModalProps } from './TestimonialModal';

interface ImageContainerProps extends  Pick <TestimonialModalProps, 'img'> {}

const ImageContainer = (props: ImageContainerProps) => {
    // Props goes here
    const { img } = props;

  return (
    <div className='relative mb-[16px]'>
        <img src={img} className='rounded-[16px]'/>
    </div>
  )
}

export default ImageContainer