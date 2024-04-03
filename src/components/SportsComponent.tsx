import { SportsCardData } from "@/data";
import { poppins } from "@/font";
import { FC } from "react";
import SportsCard from "./SportsCard";
import Ad from "./Ad";

interface SportsComponentProps {}

const SportsComponent: FC<SportsComponentProps> = ({}) => {
  return (
    <div className="w-full flex flex-col">
      <h2 className={`${poppins.className} text-2xl font-bold w-fit`}>
        Sports
        <hr className="border border-[#738FFF] w-full mt-[5px]" />
      </h2>

      <div className="w-full pt-[25px] flex flex-wrap gap-[0.875rem] h-full">
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
      <div className="flex justify-center items-center my-5">
        <button className="bg-[#2C9CF0] py-[10px] px-[30px] rounded-[3px]">
          Show more
        </button>
      </div>
    </div>
  );
};

export default SportsComponent;
