import { useState } from "react";
import DecodingDecadeFirstScreen from "../components/DecodingDecadeFirstScreen";
import DecodingDecadeModal from "../components/DecodingDecadeModal";
import DecodingDecadeSecondScreen from "../components/DecodingDecadeSecondScreen";
import DecodingDecadeThirdScreen from "../components/DecodingDecadeThirdScreen";

export function DecodingDecadeSection() {
    // State goes here
    const [apiResponse, setApiResponse] = useState({success: false, message: ''});
    const [currentPage, setCurrentPage] = useState(0);

    // Handlers goes here
    const handleApiResponse = (success: boolean, message: string) => {
        setApiResponse({success, message});
    }

    const handleScreenChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <>
        <DecodingDecadeModal> 
            {currentPage === 0 && <DecodingDecadeFirstScreen handleApiResponse={handleApiResponse} handleScreenChange={handleScreenChange} /> }
            {currentPage === 1 && <DecodingDecadeSecondScreen handleScreenChange={handleScreenChange} handleApiResponse={handleApiResponse} />}
            {currentPage === 2 && <DecodingDecadeThirdScreen  handleApiResponse={handleApiResponse} />}
        </DecodingDecadeModal>
        {!apiResponse.success && (
            <div className="absolute right-[50px] bottom-[50px] text-red-500 text-[24px] border border-red-500 rounded-md p-[16px]">{apiResponse.message}</div>
          )}
        {apiResponse.success && (
            <div className="absolute right-[50px] bottom-[50px] text-red-500 text-[24px] border border-lime-500 rounded-md p-[16px]">{apiResponse.message}</div>
          )}
        </>
    );
}