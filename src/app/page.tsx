import SportsComponent from "@/components/SportsComponent";
import TicketCollectionComponent from "@/components/TicketCollectionComponent";


export default function Home() {
  return <div className="w-[80%] mx-auto pt-[4rem] mb-24">
    <SportsComponent />
    <TicketCollectionComponent />
  </div>;
}
