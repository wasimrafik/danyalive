import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const ContactUsPage = () => {
  emailjs.init('iO0107Ha3kl-j2H0I');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    
    emailjs.send('service_hep23v7', 'template_93dyphj', {
      name: data.name,
      email: data.email,
      number: data.number,
      vin: data.vin,
      message: data.Message,
    })
    .then((response) => {
      // console.log('Email sent successfully!', response);
      toast.success("Message sent successfully!");

      reset();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      toast.error("Try again");

    });
  };

  return (
    <>
     <ToastContainer />
      <div className="container mt-20 ">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>

        <div className="">
          <div className="text-center">
            <h1>GET IN TOUCH</h1>
            <p>
              Looking for professional advice and guidance on the best auto
              parts for your car? Get in touch to speak with one of our
              representatives and find out what your options are.
            </p>
          </div>


          <div className="card mt-10">
          <div className="row g-3">
        <div className="col-12 col-md-6  mx-auto">
            <label htmlFor="validationCustom01" className="form-label"></label>
            <input
                    type="text"
                    className="form-control border-black"
                    id="name"
                    required
                    placeholder="Enter Your Full Name"
                    {...register("name", {
                      pattern: {
                        value: /^[A-Za-z0-9\s]+$/i,
                        message: "Enter a Valid name",
                      },
                      required: "Name Name is required",
                    })}
                  />
                  {errors.companyName && (
                    <p className="text-red-500">{errors.companyName.message}</p>
                  )}
        </div>
        <div className="col-12 col-md-6">
            <label htmlFor="validationCustom02" className="form-label"></label>
             <input
             type="text"
             className="form-control border-black"
             id="number"
             required
             placeholder="Enter Your Contact Number"
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
        <div className="col-12 col-md-6">
            <label htmlFor="validationCustom02" className="form-label"></label>
            <input
                    type="email"
                    className="form-control border-black"
                    required
                    id="email" 
                    placeholder="Enter Your Email"
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

        <div className="col-12 col-md-6">
            <label htmlFor="validationCustom02" className="form-label"></label>
            <input
                    type="text"
                    className="form-control border-black"
                    id="vin"
                    required
                    maxLength="9"
                    placeholder="Enter VIN Number"
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

        <div className="col-12">
            <label htmlFor="validationCustom02" className="form-label"></label>

<textarea
                    type="text"
                    className="form-control border-black"
                    cols="80"
                    rows="4"
                    id="Message"
                    required
                    placeholder="Enter Your Message Here"
                    {...register("Message", {
                      required: "Add a comment is required",
                      pattern: {
                        value: /^[A-Za-z0-9\s]+$/i,
                        message: "Please enter a valid Message",
                      },
                    })}
                  ></textarea>
                  {errors.Message && (
                    <p className="text-red-500">{errors.Message.message}</p>
                  )}
        </div>

        <div className="col-12 mx-auto text-center mb-5">

        <button
            className="flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:underline hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ml-0"
            type="submit"
          >
          Submit form
          </button>
        </div>
</div>
</div>
          
          
          </div>
          </form>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10 sm:ms-3">
            <div className="w-100 m-2">
            <iframe
      className="w-full h-64 md:h-80 rounded-lg marginRight8"
      title="Page 1"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.3782538370483!2d43.94971524450932!3d26.346625094531486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f581a33b11101%3A0x48c1b1dca4f2a560!2zRGFueWEgQXV0byBwYXJ0cyBJU1VaVSDYp9mK2LPZiNiy2Ygg2YLYt9i5INin2YTYutmK2KfYsQ!5e0!3m2!1sen!2sin!4v1673788020546!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"

    ></iframe>
            </div>
            <div className="w-100 m-2">
              <div className="card text-center marginRight8">
                <h3>Danya Auto Parts Branch 1</h3>
                <div className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </span>
                  <p className="ml-3">
                    Danya Auto parts ISUZU 6305 King Fahd Rd, 4314, Buraydah
                    52381, Saudi Arabia
                  </p>
                </div>

                <div className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </span>
                  <p className="ml-3">
                    <Link to='#' className="nav-link">
                      <span className="ms-2">+966 554256020</span>
                    </Link>
                  </p>
                </div>

                <div className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <Link
                    className="nav-link active"
                    to="mailto:danyaautoparts@hotmail.com"
                  >
                    <p className="ml-6">danyaautoparts@hotmail.com</p>
                  </Link>
                </div>

                <div className="flex">
                  <span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
</svg> */}
                    <svg
                      fill="#000000"
                      width="25px"
                      height="25px"
                      viewBox="-2 -2 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin"
                      className="jam jam-whatsapp"
                    >
                      <path d="M9.516.012C4.206.262.017 4.652.033 9.929a9.798 9.798 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a9.981 9.981 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.784 7.784 0 0 1-5.52 2.27 7.77 7.77 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.62 7.62 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.672 7.672 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z" />
                      <path d="M14.842 12.045l-1.931-.55a.723.723 0 0 0-.713.186l-.472.478a.707.707 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.694.694 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072z" />
                    </svg>
                  </span>
                  <p className="ml-3">
                    <Link className="nav-link" to="https://wa.me/966554256020">
                      <span className="ms-2 whatsappcolor">+966 554256020</span>
                    </Link>
                  </p>
                </div>

                <div className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.154 19.5v-10H8.5V4.846h9V9.5H19q1.042 0 1.77.73q.73.728.73 1.77v7.5zm-2.71 1q.818 0 1.38-.563q.56-.564.56-1.38v-8.115q0-.815-.563-1.379T4.44 8.5q-.817 0-1.378.563q-.562.564-.562 1.38v8.115q0 .815.564 1.379q.564.563 1.38.563M9.5 9.5h7V5.846h-7zm5.923 4.5q.425 0 .713-.288t.287-.712q0-.425-.287-.712T15.423 12q-.425 0-.712.288t-.288.712q0 .425.288.713t.712.287m3 0q.425 0 .713-.288t.287-.712q0-.425-.287-.712T18.423 12q-.425 0-.712.288t-.288.712q0 .425.288.713t.712.287m-3 3q.425 0 .713-.288t.287-.712q0-.425-.287-.713T15.423 15q-.425 0-.712.287t-.288.713q0 .425.288.712t.712.288m3 0q.425 0 .713-.288t.287-.712q0-.425-.287-.713T18.423 15q-.425 0-.712.287t-.288.713q0 .425.288.712t.712.288m-9 0h4v-5h-4z"
                      />
                    </svg>
                  </span>
                  <p className="ml-6">+966 163695005</p>
                </div>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10">
          <div className="w-100 m-2">
              <div className="card text-center marginRight8">
                <h3>Danya Auto Parts Branch 2 Comming Soon</h3>
                <div className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </span>
                  <p className="ms-2">
                    Danya Auto parts ISUZU 6305 King Fahd Rd, 4314, Buraydah
                    52381, Saudi Arabia
                  </p>
                </div>

                <div className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </span>
                  <p className="ml-3">
                    <Link to='#' className="nav-link">
                      <span className="ms-2">+966 554256020</span>
                    </Link>
                  </p>
                </div>

                <div className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <Link
                    className="nav-link active"
                    to="mailto:danyaautoparts@hotmail.com"
                  >
                    <p className="ml-6">danyaautoparts@hotmail.com</p>
                  </Link>
                </div>

                <div className="flex">
                  <span>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
</svg> */}
                    <svg
                      fill="#000000"
                      width="25px"
                      height="25px"
                      viewBox="-2 -2 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin"
                      className="jam jam-whatsapp"
                    >
                      <path d="M9.516.012C4.206.262.017 4.652.033 9.929a9.798 9.798 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a9.981 9.981 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.784 7.784 0 0 1-5.52 2.27 7.77 7.77 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.62 7.62 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.672 7.672 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z" />
                      <path d="M14.842 12.045l-1.931-.55a.723.723 0 0 0-.713.186l-.472.478a.707.707 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.694.694 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072z" />
                    </svg>
                  </span>
                  <p className="ml-3">
                    <Link className="nav-link" to="https://wa.me/966554256020">
                      <span className="ms-2 whatsappcolor">+966 554256020</span>
                    </Link>
                  </p>
                </div>

                <div className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7.154 19.5v-10H8.5V4.846h9V9.5H19q1.042 0 1.77.73q.73.728.73 1.77v7.5zm-2.71 1q.818 0 1.38-.563q.56-.564.56-1.38v-8.115q0-.815-.563-1.379T4.44 8.5q-.817 0-1.378.563q-.562.564-.562 1.38v8.115q0 .815.564 1.379q.564.563 1.38.563M9.5 9.5h7V5.846h-7zm5.923 4.5q.425 0 .713-.288t.287-.712q0-.425-.287-.712T15.423 12q-.425 0-.712.288t-.288.712q0 .425.288.713t.712.287m3 0q.425 0 .713-.288t.287-.712q0-.425-.287-.712T18.423 12q-.425 0-.712.288t-.288.712q0 .425.288.713t.712.287m-3 3q.425 0 .713-.288t.287-.712q0-.425-.287-.713T15.423 15q-.425 0-.712.287t-.288.713q0 .425.288.712t.712.288m3 0q.425 0 .713-.288t.287-.712q0-.425-.287-.713T18.423 15q-.425 0-.712.287t-.288.713q0 .425.288.712t.712.288m-9 0h4v-5h-4z"
                      />
                    </svg>
                  </span>
                  <p className="ml-6">+966 163695005</p>
                </div>
              </div>
            </div>
            <div className="w-100 m-2">
              <iframe
                title="Page 1"
                className=" w-100 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.3782538370483!2d43.94971524450932!3d26.346625094531486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f581a33b11101%3A0x48c1b1dca4f2a560!2zRGFueWEgQXV0byBwYXJ0cyBJU1VaVSDYp9mK2LPZiNiy2Ygg2YLYt9i5INin2YTYutmK2KfYsQ!5e0!3m2!1sen!2sin!4v1673788020546!5m2!1sen!2sin"
                height="310"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
          </div>
        </div>
    </>
  );
};

export default ContactUsPage;

















  