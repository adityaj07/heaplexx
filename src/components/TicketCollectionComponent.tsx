import { poppins } from "@/font";
import { FC } from "react";

import TicketCarousel from "./TicketCarousel";

const TicketCollectionComponent: FC = () => {
  return (
    <div
      className={`w-full bg-gradient-to-t from-[#F3F9FF] to-[#F9F8FF] dark:bg-gradient-to-t dark:from-[#221A2C] dark:to-[#18282A] flex flex-col justify-center items-center mt-[35px]`}
    >
      <h2
        className={`${poppins.className} font-bold text-[40px] text-center md:text-[50px] mb-[25px] mt-[40px] md:mt-[70px] p-5 md:p-0`}
      >
        Collection Spotlight
      </h2>
      <p className="w-[90%] md:w-[70%] text-pretty text-center mb-[51px]">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </p>

      <div className="flex justify-center items-center ml-0 mb-12">
        <TicketCarousel />
      </div>
    </div>
  );
};

export default TicketCollectionComponent;
