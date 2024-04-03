import SportsComponent from "@/components/SportsComponent";
import TicketCollectionComponent from "@/components/TicketCollectionComponent";


export default function Home() {
  return <div className="w-[90%] md:w-[80%] mx-auto pt-[2rem] md:pt-[4rem] mb-24 overflow-x-hidden">
    <SportsComponent />
    <TicketCollectionComponent />
  </div>;
}
