import WhyChooseUsImage from "./../../images/cloud-storage.png";
import { BadgeCheckIcon } from "@heroicons/react/outline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="h-screen w-full px-[5%] py-[5%] flex items-center gap-10">
      <div className="w-1/2">
        <h1
          className="font-bold text-3xl mb-[10%]"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          Why happy searching ?
        </h1>
        <div className="my-6">
          <div className="flex  gap-4" data-aos="fade-up" data-aos-delay="100">
            <BadgeCheckIcon className="w-5 h-5 text-purple-gradient" />
            <div>
              <h1 className="font-semibold text-lg">Friendly Interface</h1>
              <p className="text-gray-500 text-sm my-4">
                An simple and friendly interface make you feel happy when you
                visit our website.
              </p>
            </div>
          </div>
          <div className="flex  gap-4" data-aos="fade-up" data-aos-delay="150">
            <BadgeCheckIcon className="w-5 h-5 text-purple-gradient" />
            <div>
              <h1 className="font-semibold text-lg">Variety search</h1>
              <p className="text-gray-500 text-sm my-4">
                You can search by science name, vietnamese name, local name.
              </p>
            </div>
          </div>
          <div className="flex  gap-4" data-aos="fade-up" data-aos-delay="200">
            <BadgeCheckIcon className="w-5 h-5 text-purple-gradient" />
            <div>
              <h1 className="font-semibold text-lg">Everything is ready</h1>
              <p className="text-gray-500 text-sm my-4">
                Everything is ready to you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={WhyChooseUsImage}
          alt=""
          className="object-contain bg-cover w-4/5 h-4/5 animaton-image"
        />
      </div>
    </div>
  );
};
export default WhyChooseUs;
