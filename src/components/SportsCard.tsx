import { poppins } from "@/font";
import Image from "next/image";
import { FC } from "react";

interface SportsCardProps {
  teamImage: string;
  teamName: string;
  totalEvents: number;
  sport: string;
}

const SportsCard: FC<SportsCardProps> = ({
  teamImage,
  teamName,
  totalEvents,
  sport,
}) => {
  return (
    <div className="bg-white dark:bg-[#3B3E47] w-[18rem] h-full p-[0.625rem] shadow-xl ">
      <Image
        src={teamImage}
        alt={teamName}
        width={500}
        height={385}
        className="object-contain"
      />
      <h3 className="text-[1.1rem] font-medium pt-[0.911rem] pb-[0.9375rem]">
        {teamName}
      </h3>
      <div
        className={`flex gap-[2.5rem] px-[0.625rem] py-[0.75rem] bg-[#292B32] rounded-[4px] ${poppins.className}`}
      >
        <div className="flex flex-col gap-[0.75rem]">
          <h4 className="text-[0.75rem] text-[#525965] dark:text-[#DFDFDF]">
            Total Events
          </h4>
          <p className="text-[0.875rem] dark:text-white">
            {totalEvents} Events
          </p>
        </div>
        <div className="flex flex-col gap-[0.75rem]">
          <h4 className="text-[0.75rem] text-[#525965] dark:text-[#DFDFDF]">
            Sport
          </h4>
          <p className="text-[0.875rem] dark:text-white">{sport}</p>
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
