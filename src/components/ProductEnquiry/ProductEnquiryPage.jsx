// import React from 'react'
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SelectedProductsContext } from "../SelectedProductsContext";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductEnquiryPage = () => {
  emailjs.init("iO0107Ha3kl-j2H0I");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const { selectedProducts } = useContext(SelectedProductsContext);
  const { clearSelectedProducts } = useContext(SelectedProductsContext);

  const onSubmit = (data) => {
    console.log(data);

    emailjs
      .send("service_hep23v7", "template_spu4gaq", {
        name: data.companyName,
        email: data.email,
        number: data.number,
        vin: data.vin,
        message: data.Message,
        Year: data.Yearmodel,
        customerType: data.listRadio,
        vehicle: data.vehicleName,
      })
      .then((response) => {
        console.log("Email sent successfully!", response);
        toast.success("Message sent successfully!");
        clearSelectedProducts();
        reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Try again");
        console.log(selectedOption);
      });
  };

  const selectedOption = watch("list-radio");

  // Validation rule for the radio buttons
  const validateRadio = (value) => {
    return value !== "" || "Please select an option";
  };

  const selectedProductsText = selectedProducts
    .map(
      (product) =>
        `Part Number: ${product.SKU}, Description: ${product.Description}, Quantity: ${product.Qty}`
    )
    .join("\n");

  return (
    <>
      <ToastContainer />

      <div className="mt-20 mb-10">
        <div className="container mt-5 ">
          <div className="row">
            <div className="col text-center">
              <div>
                <h1>
                  ISUZU Spare Parts now available on Delivery In Saudi Arabia
                </h1>
              </div>
            </div>
          </div>
        </div>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="container text-center mt-5">

              <ul className="flex p-0 w-full text-sm font-medium text-gray-900 bg-white border border-black rounded-lg sm:flex sm:flex-row dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="flex-auto border-b border-black sm:border-b-0 sm:border-r">
                  <label className="flex items-center justify-center w-full py-3 text-sm font-medium text-gray-900">
                    <input
                      id="individual-radio"
                      type="radio"
                      value="Individual"
                      name="radioGroup"
                      defaultChecked
                      className="mr-2 text-blue-600 bg-gray-100 border-black dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                      {...register("listRadio", { validate: validateRadio })}
                    />
                    Individual
                  </label>
                </li>

                <li className="flex-auto border-b border-black sm:border-b-0 sm:border-r">
                  <label className="flex items-center justify-center w-full py-3 text-sm font-medium text-gray-900">
                    <input
                      id="retailer-radio"
                      type="radio"
                      value="Retailer"
                      name="radioGroup"
                      className="mr-2 text-blue-600 bg-gray-100 border-black dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                      {...register("listRadio", { validate: validateRadio })}
                    />
                    Retailer
                  </label>
                </li>

                <li className="flex-auto border-b border-black sm:border-b-0 sm:border-r">
                  <label className="flex items-center justify-center w-full py-3 text-sm font-medium text-gray-900">
                    <input
                      id="wholesaler-radio"
                      type="radio"
                      value="Wholesaler"
                      name="radioGroup"
                      className="mr-2 text-blue-600 bg-gray-100 border-black dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
                      {...register("listRadio", { validate: validateRadio })}
                    />
                    Wholesaler
                  </label>
                </li>
              </ul>

              {errors.listRadio && (
                <p className="text-red-500">{errors.listRadio.message}</p>
              )}

              <div className="mt-5">
                <h3>ENQUIRY DETAILS</h3>
              </div>
            </div>
          </div>

          <div>
            <div className="container">
              <div className="row g-3 ">
                <div className="col-12 col-md-4  mx-auto">
                  <label htmlFor="validationCustom01" className="form-label">
                    <strong>Name / Company</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="companyName"
                    required
                    {...register("companyName", {
                      pattern: {
                        value: /^[A-Za-z0-9\s]+$/i,
                        message: "Enter a Valid name",
                      },
                      required: "Name or Company Name is required",
                    })}
                  />
                  {errors.companyName && (
                    <p className="text-red-500">{errors.companyName.message}</p>
                  )}
                </div>
                <div className="col-12 col-md-4  mx-auto">
                  <label htmlFor="validationCustom01" className="form-label">
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control border-black"
                    id="email"
                    required
                    {...register("email", {
                      pattern: {
                        value: /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/gm,
                        message: "Please enter a valid email",
                      },
                      required: "email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="col-12 col-md-4  mx-auto">
                  <label htmlFor="validationCustom01" className="form-label">
                    <strong>Number</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="number"
                    required
                    maxLength="10"
                    {...register("number", {
                      required: "Number is required",
                      pattern: {
                        value: /^[0-9][0-9]{9}$/,
                        message: "Please enter a valid Number ",
                      },
                      maxLength: 10,
                    })}
                  />
                  {errors.number && (
                    <p className="text-red-500">{errors.number.message}</p>
                  )}
                </div>
                <div className="col-12 col-md-4  mx-auto">
                  <label htmlFor="validationCustom01" className="form-label">
                    <strong>VIN</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="vin"
                    required
                    maxLength="9"
                    {...register("vin", {
                      required: "vin number is required",
                      pattern: {
                        value: /^[0-9][0-9]{8}$/,
                        message: "Please enter a valid vin number",
                      },
                    })}
                  />
                  {errors.vin && (
                    <p className="text-red-500">{errors.vin.message}</p>
                  )}
                </div>
                <div className="col-12 col-md-4">
                  <label htmlFor="validationCustom02" className="form-label">
                    <strong>Year Model</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="Yearmodel"
                    maxLength="4"
                    required
                    {...register("Yearmodel", {
                      required: "year model is required",
                      pattern: {
                        value: /\b(19|20)\d\d\b/g,

                        message: "Please enter a valid Year model",
                      },
                      maxLength: 4,
                    })}
                  />
                  {errors.Yearmodel && (
                    <p className="text-red-500">{errors.Yearmodel.message}</p>
                  )}
                </div>
                <div className="col-12 col-md-4">
                  <label htmlFor="validationCustom02" className="form-label">
                    <strong>Vehicle Name</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control border-black"
                    id="vehicleName"
                    required
                    {...register("vehicleName", {
                      required: "Vehicle name is required",
                      pattern: {
                        value: /^[A-Za-z0-9\s]+$/i,
                        message: "Please enter a valid vehicle Name",
                      },
                    })}
                  />
                  {errors.vehicleName && (
                    <p className="text-red-500">{errors.vehicleName.message}</p>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="validationCustom02" className="form-label">
                    <strong>Comments</strong>
                  </label>
                  <textarea
                    type="text"
                    className="form-control border-black"
                    cols="80"
                    rows="4"
                    id="Message"
                    required
                    {...register("Message", {
                      required: "Add a comment is required",
                    })}
                    defaultValue={`${selectedProductsText}

Please add Your Comment below this:- 

                    `}
                  ></textarea>
                  {errors.Message && (
                    <p className="text-red-500">{errors.Message.message}</p>
                  )}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold hover:underline text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ml-0"
                  >
                    Submit form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductEnquiryPage;
