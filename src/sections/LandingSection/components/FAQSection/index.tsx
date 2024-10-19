import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaSmile } from 'react-icons/fa';

// Interface for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

// Sample FAQ data
// TODO: Consider moving this data to a separate file or fetching from an API
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
        <span>{question}</span>
        {/* ChevronDown icon that rotates when the item is open */}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      {/* Collapsible answer section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="pt-4 pb-2 text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

// Category section component
const CategoryList: React.FC = () => {
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState<string>("About the Event");

  // List of categories
  // TODO: Consider moving this to a configuration file or fetching from an API
  const categories = [
    "About the Event",
    "Event Logistics",
    "Participation Guidelines",
    "Other",
  ];

  // Handler for category selection
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full md:w-1/4 px-4">
      <ul className="space-y-4 mt-8 md:mt-0">
        {categories.map((category) => (
          <li
            key={category}
            className={`flex items-center space-x-3 cursor-pointer ${
              selectedCategory === category ? "text-[#884510]" : "text-[#FBD9BE]"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {/* Smile icon for each category */}
            <FaSmile
              className={`${
                selectedCategory === category ? "text-[#884510]" : "text-[#FBD9BE]"
              } w-6 h-6`}
            />
            <span className={`font-bold ${selectedCategory === category ? "text-brown-600" : ""}`}>
              {category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main FAQ Section with Category List
const FAQSectionWithCategories: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4 flex flex-col md:flex-row">
      {/* Combined Section */}
      <div className="flex flex-col md:flex-row w-full mt-8">
        {/* Category Section */}
        <CategoryList />

        {/* FAQ Section */}
        <div className="faq-section w-full md:w-3/4 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {/* Render FAQ items */}
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSectionWithCategories;