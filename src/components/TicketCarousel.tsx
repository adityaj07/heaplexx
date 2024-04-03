import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Ticketdata } from "@/data";
import Ticket from "./Ticket";

interface TicketCarouselProps {}

const TicketCarousel: FC<TicketCarouselProps> = ({}) => {
  return (
    // 50% on small screens and 33% on larger screens.
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[60%] relative "
    >
      <CarouselContent>
        {Ticketdata.map((ticket) => (
          <CarouselItem
            key={ticket.ticketTitle}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <Ticket
              ticketTitle={ticket.ticketTitle}
              ticketImage={ticket.ticketImage}
              address={ticket.address}
              eventDate={ticket.eventDate}
              buttonText={ticket.buttonText}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"rectangle"}/>
      <CarouselNext variant={"rectangle"}/>
    </Carousel>
  );
};

export default TicketCarousel;
