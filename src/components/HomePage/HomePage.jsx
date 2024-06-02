// import React from 'react'
import logo from "../../assets/New Logo.png";
import MainCarosel from "./MainCarosel";
import Cards from "./MidSection/CardsFindParts";
import Stats from "./MidSection/StatsCounterBar";
import Testimonials from "./MidSection/Testimonials";
import OurClients from "./Last Section/OurClients";
import CardsProductEnquery from "./MidSection/CardsProductEnquery";
import ContactUs from "./Last Section/ContactUs";
import { useTranslation } from "react-i18next";

export const HomePage = () => {

  const { t } = useTranslation();
  
  return (
    <>
      <div className="bg-white container-fluid">
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="flex items-end justify-center">
              <img className="flex items-end" src={logo} width="150px" alt="Logo" />
          </div>

          <div className="text-center globalMargin">
            <h5 className="text-base md:text-lg lg:text-xl">
            {t('homePageTopSectionHeading')}
              {/* Your Reliable Spare Parts Partner For All ISUZU Parts & Aftermarket Quality Parts */}
            </h5>
          </div>

          <div className="w-full flex justify-around items-center mb-5 globalMargin">
            <div className="text-center">
              {/* Add any additional content here if needed */}
            </div>
          </div>

          <MainCarosel />
        </div>

        <div className="mt-10 globalMargin">
          <div className="text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl">DANYA AUTOPARTS WELCOMES YOU</h1>
            <h3 className="text-lg md:text-xl lg:text-2xl">Your Premium Parts Supplier</h3>
            <p className="text-sm md:text-base lg:text-lg">
              Whether you’re looking to give your vehicle a makeover or you just
              need to buy a replacement part, Danya Autoparts is the best Spare
              Parts Retailer around! We’ve got what classic, fast, hard working
              and quality vehicle need to run further and make heads turn. As
              the number one in Al Qassim Region, we offer our clients and
              resellers quality auto and care products at competitive prices.
            </p>
          </div>

          <div className="flex flex-wrap justify-center m-auto globalMargin mobileHeightCards">
            <Cards />
          </div>

          <div className="text-center mt-5 mb-5 globalMargin">
            <h1 className="text-xl md:text-2xl lg:text-3xl">SPARE CAR PARTS - AT YOUR SERVICE</h1>
            <h3 className="text-lg md:text-xl lg:text-2xl">Giving Your Car the Makeover it Deserves</h3>
          </div>
          <hr />
        </div>

        <div className="globalMargin mobileHeightCards">
          <CardsProductEnquery />
        </div>

        <div className="container-fluid p-0">
          <Stats />
        </div>

        <div className="relative isolate overflow-hidden bg-white px-6 py-5 sm:py-6 lg:px-8 globalMargin">
          <Testimonials />
        </div>

        <div className="globalMargin">
          <OurClients />
        </div>

        <div className="globalMargin ">
          <ContactUs />
        </div>
      </div>
    </>
  );
};
