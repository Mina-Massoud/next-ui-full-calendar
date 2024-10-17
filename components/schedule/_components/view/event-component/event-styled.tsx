"use client";

import { Event, Variant, variants } from "@/providers/schedular-provider";
import React, { useMemo } from "react";
import { Chip } from "@nextui-org/chip";
import { useModalContext } from "@/providers/modal-provider";
import AddEventModal from "@/components/schedule/_modals/add-event-modal";
import { CustomEventModal } from "@/types/schedular-viewer";
// Function to format date
const formatDate = (date: Date) => {
  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

interface EventStyledProps extends Event {
  minmized?: boolean;
  CustomEventComponent?: React.FC<Event>;
}

export default function EventStyled({
  event,
  CustomEventModal,
}: {
  event: EventStyledProps;
  CustomEventModal?: CustomEventModal;
}) {
  const { showModal: showEventModal } = useModalContext();

  // Handler function
  function handleEditEvent(event: Event) {
    console.log("Edit event", event);

    showEventModal({
      title: event?.title,
      body: (
        <AddEventModal
          CustomAddEventModal={
            CustomEventModal?.CustomAddEventModal?.CustomForm
          }
        />
      ),
      getter: async () => {
        return { ...event };
      },
    });
  }

  return (
    <div
      onClickCapture={(e) => {
        e.stopPropagation(); // Stop event from propagating to parent
        handleEditEvent({
          id: event?.id,
          title: event?.title,
          startDate: event?.startDate,
          endDate: event?.endDate,
          description: event?.description,
          variant: event?.variant,
        });
      }}
      key={event?.id}
      className="w-full use-automation-zoom-in cursor-pointer border border-default-400/60 rounded-lg overflow-hidden flex flex-col flex-grow "
    >
      {event.CustomEventComponent ? (
        <event.CustomEventComponent {...event} />
      ) : (
        <Chip
          variant="flat"
          color={event?.variant}
          classNames={{ content: "p-0" }}
          className={`min-w-full items-start p-0 flex-grow flex-col flex ${event?.minmized ? "h-full" : "min-h-fit p-1"} rounded-md`}
        >
          <div
            className={`flex ${event?.minmized ? "p-0" : "p-1"} flex-col flex-grow px-1 rounded-md  items-start w-full`}
          >
            <h1
              className={`${event?.minmized && "text-[0.7rem] p-0 px-1"} font-semibold line-clamp-1`}
            >
              {event?.title}
            </h1>

            <p className="text-[0.65rem]">{event?.description}</p>
            {!event?.minmized && (
              <div className="flex justify-between w-full">
                <p className="text-sm">{formatDate(event?.startDate)}</p>
                <p className="text-sm">-</p>
                <p className="text-sm">{formatDate(event?.endDate)}</p>
              </div>
            )}
          </div>
        </Chip>
      )}
    </div>
  );
}
