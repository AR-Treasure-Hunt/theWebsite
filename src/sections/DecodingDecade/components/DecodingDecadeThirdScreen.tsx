import { useGetDecodingDecadeImage } from '@/api/DecodingDecadeQuery';
import React from 'react'
import { FiDownload } from 'react-icons/fi'

interface DecodingDecadeThirdScreenProps {
    handleApiResponse: (success: boolean, message: string)=>void;
}

const DecodingDecadeThirdScreen = (props: DecodingDecadeThirdScreenProps) => {
    // Props goes here
    const {handleApiResponse} = props

    // Query goes here
    const { data, isLoading, error } = useGetDecodingDecadeImage();

    if(error){
        handleApiResponse(false, error.message || 'An error occurred while fetching the image.');
    }

    // Handlers goes here
    const handleDownloadImage = () => {
        const link = document.createElement('a');
        link.href = data?.imageUrl || '';
        link.download = 'decoding_decade_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


  return (
    <>
        <div className='w-[100px] h-[100px]'>
            <img src={data?.imageUrl} alt='Downloadable Image' className='w-full h-full object-cover' />
        </div>
        <button
            type='button'
            className='bg-[#004B6E] w-full flex gap-[8px] justify-center text-[18px] text-white px-4 py-2 rounded-md font-medium hover:opacity-50 transition-colors'
            onClick={()=> handleDownloadImage()}
            disabled={isLoading}
        >
            <FiDownload size={24} /> Download Image
        </button>
    </>
  )
}

export default DecodingDecadeThirdScreen