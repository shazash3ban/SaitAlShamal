"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import InquiryForm from "../Form";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <InquiryForm/>
      <div className="container">
        <SectionTitle
          title="Reach Our Office"
          paragraph="Get in touch with us through the following contact details:"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full max-w-md px-4">
          <div className="office-info bg-[#DDD] p-8 rounded-lg shadow-lg">
              <p className="mb-4 flex items-center text-lg font-semibold text-gray-800">
             
                <strong>Email:</strong>
                <a
                  href="mailto:info@yourbrand.com"
                  className="ml-2 text-blue-600 hover:underline"
                >
                  help@sait-alshamal.com
                </a>
              </p>

              {/* <p className="mb-4 flex items-center text-lg font-semibold text-gray-800">
                
                <strong>Phone:</strong>
                <span className="ml-2">+1 123 456 7890</span>
              </p> */}

              <p className="mb-4 flex items-center text-lg font-semibold text-gray-800">
               
                <strong>Address:</strong>
                <span className="ml-2"> 🇸🇦 
                3291, Haritha bin Ashal, 6811</span>
              </p>

              <p className="flex items-center text-lg font-semibold text-gray-800">
                
                <strong>Zip Code:</strong>
                <span className="ml-2"> 55425</span>
              </p>
            </div>
          </div>
        </div>
      </div>

  
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
