import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Interface for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

// Sample FAQ data
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

// Single FAQ item component
const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  // State to manage the open/closed state of the FAQ item
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      {/* Clickable button to toggle the FAQ item */}
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
         <span style={{ fontSize: '26px' }}>{question}</span>
        {/* ChevronDown icon that rotates when the item is open */}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      {/* Collapsible answer section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
<p className="pt-4 pb-2 text-gray-600" style={{ fontSize: '20px' }}>{answer}</p>      </div>
    </div>
  );
};

// Main FAQ Section
const FAQSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4">
<h2 className="text-5xl font-bold mb-6 text-center">FAQ</h2>      
<div className="space-y-2">
        {/* Render FAQ items */}
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
