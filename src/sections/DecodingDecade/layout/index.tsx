import { useState } from "react";
import DecodingDecadeFirstScreen from "../components/DecodingDecadeFirstScreen";
import DecodingDecadeModal from "../components/DecodingDecadeModal";
import DecodingDecadeSecondScreen from "../components/DecodingDecadeSecondScreen";

export function DecodingDecadeSection() {
  // State to manage the current page displayed in the modal
  const [currentPage, setCurrentPage] = useState(0);

  // Function to update the current page
  const handleScreenChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <DecodingDecadeModal>
      {currentPage === 0 && <DecodingDecadeFirstScreen handleScreenChange={handleScreenChange} />}
      {currentPage === 1 && <DecodingDecadeSecondScreen />}
    </DecodingDecadeModal>
  );
}
