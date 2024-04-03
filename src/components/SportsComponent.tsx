import { SportsCardData } from "@/data";
import { poppins } from "@/font";
import { FC } from "react";
import SportsCard from "./SportsCard";
import Ad from "./Ad";
import { ModeToggle } from "./mode-toggle";


const SportsComponent: FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex  justify-between items-center">
        <h2 className={`${poppins.className} text-2xl font-bold w-fit`}>
          Sports
          <hr className="border border-[#738FFF] w-full mt-[5px]" />
        </h2>
        <div className=" lg:mr-24">
        <ModeToggle/>
        </div>
      </div>

      <div className="w-full pt-[25px] flex justify-center  items-center lg:justify-normal lg:items-start flex-wrap gap-[1rem] md:gap-[5rem] lg:gap-[0.875rem] h-full">
        {SportsCardData.map((card) => (
          <SportsCard
            key={card.teamName}
            teamImage={card.teamImage}
            teamName={card.teamName}
            totalEvents={card.totalEvents}
            sport={card.sport}
          />
        ))}
        <Ad
          image="/images/ad.png"
          title="Advertisement title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="flex justify-center items-center mt-[3.125rem] mb-[3.3125rem]">
        <button className="bg-[#2C9CF0] py-[10px] px-[30px] rounded-[3px] text-white font-semibold text-[0.875rem] hover:bg-[#118ded] transition-colors duration-150">
          Show more
        </button>
      </div>
    </div>
  );
};

export default SportsComponent;
