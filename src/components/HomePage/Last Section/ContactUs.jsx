import React from 'react';
import bgImage from '../../../assets/contactusImage.jpg';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  const getContactInfo = () => {
    navigate('/contactus');
  };

  return (
    <div className="flex flex-col items-center text-white no-underline bg-black border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:rounded-none md:rounded-s-lg"
        src={bgImage}
        alt="Noteworthy technology acquisitions 2021"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">Contact Us</h2>
          <p>
            Have questions or need assistance? Contact us today! Our team is
            here to provide you with the support and guidance you need for all
            your auto parts inquiries. Whether you&apos;re seeking advice on
            product compatibility, have inquiries about our services, or
            simply want to reach out, we&apos;re here to help. Reach out through
            our contact form, give us a call, or send us an email.
          </p>
        </div>
        <div className='maxBTN'>
          <button
            onClick={getContactInfo}
            type="button"
            className="w-full flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ml-0"
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
