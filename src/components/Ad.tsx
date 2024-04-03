import Image from "next/image";
import { FC } from "react";

interface AdProps {
  image: string;
  title: string;
  content: string;
}

const Ad: FC<AdProps> = ({ image, title, content }) => {
  return (
    <div className="bg-white dark:bg-[#3B3E47] w-[15rem] md:w-[17rem] h-full p-[0.625rem] shadow-xl ">
      <div className="border border-[#006555]/30">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="object-contain"
          />
          <div className="bg-black text-white py-[0.1rem] px-[0.3rem] w-fit absolute top-0 right-0 text-sm">
            Ad
          </div>
        </div>

        <div className="px-[1.5rem] pb-[1.9rem]">
          <h3 className="text-[1.3rem] font-semibold pt-[1.75rem] mb-[0.5rem]">
            {title}
          </h3>
          <p className="prose text-[0.8rem] pb-[4.6rem]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Ad;
