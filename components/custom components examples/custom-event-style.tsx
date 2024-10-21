import { Event } from "@/types";

const CustomEventStyled: React.FC<Event> = (event, customData) => {
  return (
    <div>
      {event?.title} {event?.variant}
    </div>
  );
};
