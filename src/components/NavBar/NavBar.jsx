import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import logo from "../../assets/New Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const navigation = [
  { name: "Home Page", path: "/", current: true },
  { name: "Search Inventory", path: "/searchInventory", current: false },
  { name: "Product Enquiry", path: "/productEnquiry", current: false },
  { name: "About Us", path: "/aboutus", current: false },
  { name: "Contact Us", path: "/contactus", current: false },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook

  const handleMobileNavClick = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  // Function to switch language
  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex items-center">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">DANYA AUTOPARTS</span>
              <img className="h-8 w-auto" src={logo} alt="DANYA AUTOPARTS" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-semibold decoration-transparent leading-6 text-gray-900 ml-4"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Language switcher button */}
          <div className="hidden lg:flex items-center">
            <button onClick={() => switchLanguage('en')} className="text-gray-900 hover:text-gray-600 mr-4">{t('English')}</button>
            <button onClick={() => switchLanguage('ar')} className="text-gray-900 hover:text-gray-600">{t('Arabic')}</button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">DANYA AUTOPARTS</span>
                <img className="h-8 w-auto" src={logo} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleMobileNavClick(item.path)}
                      className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base decoration-transparent font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default NavBar;
