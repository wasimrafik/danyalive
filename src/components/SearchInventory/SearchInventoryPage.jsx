import { useState, useEffect, useContext } from 'react';
import searchListData from "../inventory_list_json.json";
import { useNavigate } from 'react-router-dom';
import { SelectedProductsContext } from '../SelectedProductsContext';
import { Link } from 'react-router-dom';


const SearchInventoryPage = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { selectedProducts, setSelectedProducts } = useContext(SelectedProductsContext);

  useEffect(() => {
    setData(searchListData.SKU_LIST);
  }, []);

  const getSearchValueFromInventory = () => {
    setIsLoading(true);
    setTimeout(() => {
      const filteredData = data.filter((item) => {
        return (
          item.SKU.toString().toLowerCase().includes(searchText.toLowerCase()) ||
          item.Description.toString().toLowerCase().includes(searchText.toLowerCase())
        );
      });
      setFilteredData(filteredData);
      setIsLoading(false);
    }, 500);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const addProduct = (item) => {
    setSelectedProducts((prevProducts) => {
      const existingProduct = prevProducts.find(product => product.SKU === item.SKU);
      if (existingProduct) {
        return prevProducts.map(product =>
          product.SKU === item.SKU ? { ...product, Qty: product.Qty + 1 } : product
        );
      } else {
        return [...prevProducts, { ...item, Qty: 1 }];
      }
    });
  };

  const increaseQty = (sku) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.SKU === sku ? { ...product, Qty: product.Qty + 1 } : product
      )
    );
  };

  const decreaseQty = (sku) => {
    setSelectedProducts((prevProducts) =>
      prevProducts
        .map((product) =>
          product.SKU === sku && product.Qty > 0
            ? { ...product, Qty: product.Qty - 1 }
            : product
        )
        .filter((product) => product.Qty > 0)
    );
  };

  const getCheckout = () => {
    navigate('/productEnquiry');
  };

  return (
    <div className="container mt-20">
      
      <div className="row">
        <div className="col text-center">
          <h2>Find Parts for Your Vehicle</h2>
        </div>
      </div>

      <div className="row g-3 mt-3 items-baseline">
        <div className="row d-flex mt-3">
          <div className="col-12 col-md-6">
            <label className="form-label"></label>
            <input
              type="text"
              className="form-control border-black"
              id="txtSearchText"
              placeholder="Example: 0011583000, 0012543000"
              value={searchText}
              onChange={handleInputChange}
              required
            />
            <p className="subtext">
              Can&apos;t find what you&apos;re looking for? 
              <span>
                <Link className="text-danger no-underline" to="/contactus">
                &nbsp;  Contact us &nbsp;
                </Link>
              </span>
              for assistance.
            </p>
            <div className="valid-feedback">Looks good!</div>
          </div>

                    <div className="col-12 col-md-6 mt-3 mb-3 ">
                  <button
                    type="submit"
                    onClick={getSearchValueFromInventory}

                    className="flex-none mt-2 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold hover:underline text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ml-0"
                  >
              Search Product
                  </button>
                </div>
        </div>
      </div>

      <div className="relative overflow-x-auto max-h-96 overflow-y-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
    <thead className="sticky-top text-xs bg-blue-500 text-white uppercase">
      <tr>
        <th scope="col" className="px-6 py-3">Part Number</th>
        <th scope="col" className="px-6 py-3">Description</th>
        <th scope="col" className="px-6 py-3">Quantity</th>
        <th scope="col" className="px-6 py-3">Available</th>
        <th scope="col" className="px-6 py-3">Action</th>
      </tr>
    </thead>
    <tbody className="table-body">
      {isLoading ? (
        <tr>
          <td colSpan="5" className="text-center py-4 text-black text-xl">Loading data...</td>
        </tr>
      ) : filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
          >
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-blue-700 font-bold">{item.SKU}</td>
            <td className="px-6 py-4 text-black font-bold">{item.Description}</td>
            <td className="px-6 py-4 text-black font-bold">{item.Qty}</td>
            <td className="px-6 py-4 text-black font-bold">{item.Qty >= 1 ? "Yes" : "No"}</td>
            <td className="px-6 py-4 text-black font-bold min-w-36">
              <button
                className="hover:underline flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ml-0"
                onClick={() => addProduct(item)}
              >
                Add Item
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" className="text-center py-4 text-black text-xl font-bold">No items found.</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

<h2 className="mt-5">Selected Products</h2>
<div className="relative overflow-x-auto max-h-96 overflow-y-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
    <thead className="sticky-top text-xs bg-blue-500 text-white uppercase">
      <tr>
        <th scope="col" className="px-6 py-3">PART NUMBER</th>
        <th scope="col" className="px-6 py-3">Description</th>
        <th scope="col" className="px-6 py-3">Quantity</th>
        <th scope="col" className="px-6 py-3">Action</th>
      </tr>
    </thead>
    <tbody className="table-body">
      {selectedProducts.length > 0 ? (
        selectedProducts.map((product, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
          >
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-blue-700">{product.SKU}</td>
            <td className="px-6 py-4 text-black font-bold">{product.Description}</td>
            <td className="px-6 py-4 text-black font-bold">{product.Qty}</td>
            <td className="px-6 py-4 text-black font-bold min-w-36 flex space-x-2">
              <button
                className="font-medium btn btn-danger hover:underline flex items-center justify-center "
                onClick={() => decreaseQty(product.SKU)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </button>
              <button
                className="font-medium btn btn-success hover:underline flex items-center justify-center"
                onClick={() => increaseQty(product.SKU)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4" className="text-center py-4 text-black text-xl font-bold">Please add item to order</td>
        </tr>
      )}
    </tbody>
  </table>
</div>



                <div className="mt-5 d-flex text-center justify-center">



                {selectedProducts.length > 0 && (
          <button
            className="flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold hover:underline text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ml-0"
            onClick={getCheckout}
            type="submit"
          >
                        Check Out
          </button>
        )}

                </div>





 
    </div>
  );
};

export default SearchInventoryPage;
