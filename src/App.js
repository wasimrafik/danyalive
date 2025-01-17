import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import AboutUSPage from "./components/AboutUS/AboutUSPage";
import ContactUsPage from "./components/ContactUs/ContactUsPage";
import PageNotFound from "./components/NotFound/PageNotFound";
import SearchInventoryPage from "./components/SearchInventory/SearchInventoryPage";
import ProductEnquiryPage from "./components/ProductEnquiry/ProductEnquiryPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { SelectedProductsProvider } from "./components/SelectedProductsContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <SelectedProductsProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/searchInventory" element={<SearchInventoryPage />} />
            <Route path="/productEnquiry" element={<ProductEnquiryPage />} />
            <Route path="/aboutus" element={<AboutUSPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </SelectedProductsProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
