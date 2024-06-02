import OurClients from "../HomePage/Last Section/OurClients";
import Stats from "../HomePage/MidSection/StatsCounterBar";
import Testimonials from "../HomePage/MidSection/Testimonials";
import AboutUsCarousel from "../HomePage/carousel/aboutUS/AboutUsCarousel";
import { Accordion } from 'react-bootstrap';

const AboutUSPage = () => {
  return (
    <>
      <div className="bg-white container mx-auto mt-20 mb-10 p-4">
        <div className="mb-10 text-center">
          <h1>DANYA AUTOPARTS WELCOMES YOU</h1>
          <h3>Your Premium Parts Supplier</h3>
          <p className="max-w-2xl mx-auto">
            Whether you’re looking to give your vehicle a makeover or you just
            need to buy a replacement part, Danya Autoparts is the best Spare
            Parts Retailer around! We’ve got what classic, fast, hard working
            and quality vehicle need to run further and make heads turn. As
            the number one in Al Qassim Region, we offer our clients and
            resellers quality auto and care products at competitive prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <AboutUsCarousel />
          </div>
          <div>
            <p>
              Danya Autoparts: Your Trusted Source for Quality Auto Parts Danya
              Autoparts is your one-stop shop for all your vehicle needs,
              whether you're looking for replacement parts, upgrades, or car
              care products. We offer a wide selection of high-quality parts at
              competitive prices to keep your vehicle running smoothly and
              looking its best.
            </p>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Why Choose Danya Autoparts?</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Extensive selection: We carry a wide variety of parts for classic, performance, and everyday vehicles.</li>
                    <li>Competitive prices: We offer the best value for your money on all our products.</li>
                    <li>Quality products: We only stock parts from trusted brands to ensure quality and performance.</li>
                    <li>Expertise: Our team can help you find the right parts for your specific needs. Visit Danya Autoparts today and experience the difference!</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Having Trouble with an Isuzu Genuine Part?</Accordion.Header>
                <Accordion.Body>
                  Buy Auto Parts has the best warranty in the industry,
                  without question. If you are experiencing any trouble with
                  your part, If you need further assistance, feel free to call
                  and talk to one of our experts.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>What information should I have ready when I call in with a question or concern?</Accordion.Header>
                <Accordion.Body>
                  If you would like to call and speak to one of our experts,
                  please have your invoice number ready so we can quickly find
                  your file. Your invoice number is located on the
                  confirmation page that was packaged with your part. If you
                  provided an email address, this number can also be found in
                  your confirmation emails.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>If I need a replacement part, how long does it take to ship to me?</Accordion.Header>
                <Accordion.Body>
                  In the rare case that your part is defective, we can ship
                  you out a replacement auto part the same day in exchange for
                  a temporary deposit. This deposit is to ensure that you send
                  back your defective part and is fully refunded once it
                  arrives back at our warehouse. We will also provide you with
                  a free return shipping label to get the other part back to
                  us.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <p>
              Danya Autoparts: Your Trusted Source for Quality Auto Parts Danya
              Autoparts is your one-stop shop for all your vehicle needs,
              whether you're looking for replacement parts, upgrades, or car
              care products. We offer a wide selection of high-quality parts at
              competitive prices to keep your vehicle running smoothly and
              looking its best.
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Having Trouble with an Isuzu Genuine Part?</Accordion.Header>
                <Accordion.Body>
                  We understand that even the best parts can sometimes
                  experience issues. If you're having trouble with your
                  Isuzu genuine part, here's what to do:
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Contact our experts?</Accordion.Header>
                <Accordion.Body>
                  Call us and speak to one of our knowledgeable team members.
                  They can help diagnose the problem and answer any questions
                  you may have.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Have your information ready:</Accordion.Header>
                <Accordion.Body>
                  To help us quickly locate your purchase and assist you
                  efficiently, please have your invoice number ready when you
                  call. You can find your invoice number on the confirmation
                  page that came with your part or in your confirmation email
                  if you provided one.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Replacement parts</Accordion.Header>
                <Accordion.Body>
                  <b>Here's how it works:</b>
                  <ul>
                    <li>We will require a temporary deposit to ensure the return of the defective part.</li>
                    <li>This deposit will be fully refunded once we receive the returned part in our warehouse.</li>
                    <li>We will also provide you with a free return shipping label for your convenience.</li>
                  </ul>
                  We are committed to providing you with the best possible service.
                  Please don't hesitate to contact us if you have any
                  questions or concerns.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div>
            <AboutUsCarousel />
          </div>
        </div>




        <div className="grid max-w-screen-xl items-center grid-cols-1 gap-8 p-4 mx-auto bg-red-500 text-black sm:grid-cols-1 xl:grid-cols-3 sm:p-8 ">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-3xl font-extrabold text-white">Our Vision</h4>
            <p className="text-2xl font-bold text-white">
              Being the best provider of services and high quality auto parts
              for the automotive market.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-3xl font-extrabold text-white">Our Mission</h4>
            <p className="text-2xl font-bold text-white">
              To satisfy our customers by providing competitive products
              support for their businesses through a distribution network
              integrated.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-3xl font-extrabold text-white">Our Vision</h4>
            <p className="text-2xl font-bold text-white">
              We ensure highest quality to accomplish, so clients don’t take
              off.
            </p>
          </div>
        </div>
        <div className="mb-10">
          <OurClients />
        </div>

        <div>
          <Stats />
        </div>
        <div className="relative isolate overflow-hidden bg-white px-6 py-5 sm:py-6 lg:px-8">
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default AboutUSPage;
