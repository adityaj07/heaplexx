import Image from "next/image";
import { FC } from "react";

interface AdProps {
  image: string;
  title: string;
  content: string;
}

const Ad: FC<AdProps> = ({ image, title, content }) => {
  return (
    <div className="bg-white dark:bg-[#3B3E47] w-[18rem] h-full p-[0.625rem] shadow-xl ">
      <div className="border border-[#006555] h-full">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="object-contain"
        />
        <div className="px-[1.5rem] pb-[1.9rem]">
          <h3 className="text-[1.4rem] font-semibold pt-[1.75rem] pb-[1.5rem]">
            {title}
          </h3>
          <p className="prose text-[0.9rem]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Ad;
