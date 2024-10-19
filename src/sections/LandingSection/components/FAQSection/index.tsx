import React, { useState } from 'react'; 
import { ChevronDown } from 'lucide-react'; 

interface FAQItem {
  question: string;
  answer: string;
}

// Dummy data for the FAQ items
const faqData: FAQItem[] = [
  {
    question: "What is an AR treasure hunt?",
    answer: "An AR treasure hunt is an exciting adventure that combines augmented reality technology with real-world exploration. Participants use their smartphones to find virtual treasures hidden in physical locations."
  },
  {
    question: "When can I participate?",
    answer: "Our AR treasure hunts are scheduled regularly throughout the year. Check our events calendar for upcoming dates and times. We also offer special seasonal hunts during holidays!"
  },
  {
    question: "Who can participate?",
    answer: "Anyone with a compatible smartphone can join our AR treasure hunts! We welcome participants of all ages, though children under 12 should be accompanied by an adult. No prior AR experience is necessary."
  }
];

// Functional component representing a single FAQ item
const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  // State to track whether the FAQ item is open or collapsed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      {/* Button to toggle the FAQ item open or closed */}
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)} // Toggles the isOpen state
      >
        {/* Display the question */}
        <span>{question}</span>

        {/* Chevron icon with rotation effect based on whether the FAQ item is open */}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>

      {/* Conditionally rendered answer text with a transition effect when opening/closing */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {/* Answer text that is revealed when the item is open */}
        <p className="pt-4 pb-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

// Functional component for the FAQ section, rendering all FAQ items
const FAQSection: React.FC = () => {
  return (
    <div className="faq-section max-w-2xl mx-auto my-8 px-4">
      {/* Heading for the FAQ section */}
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

      {/* Rendering all FAQ items with a small space between each */}
      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
