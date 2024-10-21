import EventStyled from "@/components/schedule/_components/view/event-component/event-styled";
import { useModalContext } from "@/providers/modal-provider";
import { Event } from "@/types";
import React from "react";

export default function ShowMoreEventsModal() {
  const { data } = useModalContext();
  const dayEvents = data?.dayEvents || [];

  return (
    <div className="flex flex-col gap-2">
      {dayEvents.map((event: Event) => (
        <EventStyled key={event.id} event={{ ...event }} />
      ))}
    </div>
  );
}
