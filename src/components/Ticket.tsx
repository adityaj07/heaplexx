import { poppins } from "@/font";
import Image from "next/image";
import { FC } from "react";

interface TicketProps {
  ticketImage: string;
  ticketTitle: string;
  eventDate: {
    date: string;
    day: string;
    time: string;
  };
  address: string;
  buttonText: string;
}

const Ticket: FC<TicketProps> = ({
  ticketImage,
  ticketTitle,
  eventDate,
  address,
  buttonText,
}) => {
  return (
    <>
      <div className="bg-[#FFFFFF] dark:bg-[#3B3E47] w-[16rem] h-[39rem] relative pt-[0.8rem] shadow-xl">
        <Image
          src={ticketImage}
          alt={ticketTitle}
          width={320}
          height={520}
        />
        <div className="border-b-[2px] border-[#A9ACB2] dark:border-[#818A97] border-dashed w-[85%] mx-auto">
          <div className="absolute rounded-full w-5 h-5 dark:bg-gradient-to-l dark:from-[#3B3E47] dark:via-[#3B3E47] dark:to-transparent -mt-2 left-1"></div>
          <div className="absolute rounded-full w-5 h-5 bg-[#EFF3F9] dark:bg-[#201D2C] -mt-2 -left-2"></div>
          <div className="absolute rounded-full w-5 h-5 dark:bg-gradient-to-l dark:from-[#3B3E47] dark:via-[#3B3E47] dark:to-transparent -mt-2 right-3"></div>
          <div className="absolute rounded-full w-5 h-5 bg-[#EFF3F9] dark:bg-[#201D2C] -mt-2 -right-2 "></div>
        </div>
        <div className="flex flex-col space-y-3 justify-center items-center pt-[1.25rem]">
          <h3 className={`${poppins.className} text-[1.0625rem] font-medium`}>
            {ticketTitle}
          </h3>
          <div className="text-[0.875rem]">
            {eventDate.date} | {eventDate.day} | {eventDate.time}
          </div>
          <p className="text-center text-[0.875rem] text-[#525965] dark:text-[#DFDFDF]">
            {address}
          </p>
          <button className="py-[0.625rem] px-[2.5rem] bg-black text-white text-[0.8rem]">
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Ticket;
