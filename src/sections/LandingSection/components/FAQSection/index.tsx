import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is there a registration fee to participate?",
    answer: "No, participation is absolutely free. You can, however, win many things before and during the event. So, make sure to follow all our social media accounts!"
  },
  {
    question: "Can I participate as an individual or as a team?",
    answer: "You can register as an individual (solo), with a friend (duo) or with a max of two friends (trio). Experts say that this game is best played as a trio!"
  },
  {
    question: "What is Augmented Reality?",
    answer: "Augmented Reality (AR) is a technology that blends the digital world with the real one by placing digital elements, such as images, videos, and 3D models, on top of the physical environment in real-time that you can observe through your phone camera."
  },
  {
    question: "Can I participate in the event with no prior experience of AR?",
    answer: "Yes, you can! This event is designed for participants of all experience levels. Instructions and tutorials will be provided for your ease."
  },
  {
    question: "How many rounds will ARTH v3 have?",
    answer: "Like the last iteration, ARTH v3 will have 3 rounds, with the final round being the AR Hunt."
  },
  {
    question: "Is ARTH v3 any different from ARTH v2?",
    answer: "Absolutely! Our team has been working relentlessly to provide a fun and novel experience for you. ARTH v3 will have features never seen before, as was the case with ARTH v2."
  },
  {
    question: "Is there an age restriction?",
    answer: "No, AR Treasure Hunt is free for all. Participants under the age of 18 must acquire approval from their legal guardian, though."
  }
];

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b bg-moussaka p-4 border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ fontSize: '26px' }}>{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="pt-4 pb-2 text-white" style={{ fontSize: '20px' }}>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4 mb-8">
      <h2 className="text-5xl font-bold mb-6 text-center text-white">FAQ</h2>
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
