import React from 'react';
import bgImage from '../../../assets/productInqueryImage.jpg';
import { useNavigate } from 'react-router-dom';

const CardsProductEnquiry = () => {
  const navigate = useNavigate();

  const getEnquiry = () => {
    navigate('/productEnquiry');
  };

  return (
    <div className="flex flex-col items-center text-white no-underline bg-black border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl">Enquire Your ISUZU Auto Parts</h2>
          <p className="text-start text-sm md:text-base lg:text-lg mt-4">
            Explore the convenience of sourcing your ISUZU auto parts
            hassle-free with us! Our platform offers a seamless and intuitive
            experience for all your ISUZU parts inquiries. Say goodbye to the
            complexities of hunting down specific components.
          </p>
        </div>
        <div className="maxBTN">
          <button
            type="button"
            onClick={getEnquiry}
            className="w-full flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ml-0"
          >
            Product Enquiry
          </button>
        </div>
      </div>
      <img
        className="object-cover w-full rounded-t-lg h-96 md:rounded-none md:rounded-s-lg"
        src={bgImage}
        alt="Noteworthy technology acquisitions 2021"
      />
    </div>
  );
};

export default CardsProductEnquiry;
